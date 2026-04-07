import {
  compactVerify,
  importSPKI,
  createRemoteJWKSet,
  type JWTPayload,
  SignJWT,
  importPKCS8,
  type ProtectedHeaderParameters,
  type JWTHeaderParameters,
} from 'jose';

import { Algorithm, type AsymmetricAlgorithm } from './keys';
import { type HMACSecrets, type AsymmetricSecrets, type Secrets } from './types';

export const isHmac = (
  algorithm: Algorithm
): algorithm is Algorithm.HS256 | Algorithm.HS384 | Algorithm.HS512 =>
  algorithm === Algorithm.HS256 || algorithm === Algorithm.HS384 || algorithm === Algorithm.HS512;

export const isHmacSecret = (secret: Secrets): secret is HMACSecrets => isHmac(secret.algorithm);

const verifyHmacSignature = async (
  jwt: string,
  { secret, base64Encoded }: HMACSecrets
): Promise<boolean | undefined> => {
  if (!secret) {
    return;
  }

  try {
    const secretBuffer = parseHmacSecret(secret, base64Encoded);
    await compactVerify(jwt, secretBuffer);
    return true;
  } catch (error: unknown) {
    console.error(error);
    return false;
  }
};

const verifyAsymmetricSignature = async (
  jwt: string,
  { publicKey, jwksUrl, algorithm }: AsymmetricSecrets
): Promise<boolean | undefined> => {
  // If JWKs URL is provided, use it to verify the JWT first
  if (jwksUrl) {
    try {
      const getJwks = createRemoteJWKSet(new URL(jwksUrl));
      await compactVerify(jwt, getJwks);
      return true;
    } catch (error: unknown) {
      console.error(error);
      return false;
    }
  }

  // If public key is provided, use it to verify the JWT
  if (publicKey) {
    try {
      const key = await importSPKI(publicKey, algorithm);
      await compactVerify(jwt, key);
      return true;
    } catch (error: unknown) {
      console.error(error);
      return false;
    }
  }
};

/**
 * Verify the JWT signature based on the secret provided
 * if the secret is empty, return undefined
 */
export const verifyJwt = async (jwt: string, secret: Secrets): Promise<boolean | undefined> => {
  if (isHmacSecret(secret)) {
    return verifyHmacSignature(jwt, secret);
  }

  return verifyAsymmetricSignature(jwt, secret);
};

const parseHmacSecret = (secret: string, base64Encoded?: boolean): Uint8Array => {
  return base64Encoded
    ? // eslint-disable-next-line unicorn/prefer-code-point
      new Uint8Array([...window.atob(secret)].map((char) => char.charCodeAt(0)))
    : new TextEncoder().encode(secret);
};

const parseAsymmetricSecret = async (
  privateKey: string,
  algorithm: AsymmetricAlgorithm
): Promise<CryptoKey> => {
  return importPKCS8(privateKey, algorithm);
};

/**
 * Assert the result is a valid JSON object,
 * assert `alg` is a string and verify the algorithm is a valid one.
 */
export const isValidJwtHeader = (header: unknown): header is JWTHeaderParameters => {
  if (typeof header !== 'object' || header === null || Array.isArray(header)) {
    return false;
  }

  if (!('alg' in header) || typeof header.alg !== 'string') {
    return false;
  }

  if (
    !Object.values(Algorithm)
      .map<string>((value) => value)
      .includes(header.alg)
  ) {
    return false;
  }

  return true;
};

export const encodeJwt = async (
  header: ProtectedHeaderParameters,
  payload: JWTPayload,
  secret: Secrets
) => {
  if (!isValidJwtHeader(header)) {
    return;
  }

  const jwt = new SignJWT(payload).setProtectedHeader(header);

  if (isHmacSecret(secret) && secret.secret) {
    return jwt.sign(parseHmacSecret(secret.secret, secret.base64Encoded));
  }

  if (!isHmacSecret(secret) && secret.privateKey) {
    const key = await parseAsymmetricSecret(secret.privateKey, secret.algorithm);
    return jwt.sign(key);
  }
};

export const parseAlgorithmFromHeader = (
  header: ProtectedHeaderParameters
): Algorithm | undefined => {
  if (typeof header.alg !== 'string' || !(header.alg in Algorithm)) {
    return undefined;
  }
  // eslint-disable-next-line no-restricted-syntax
  return header.alg as Algorithm;
};
