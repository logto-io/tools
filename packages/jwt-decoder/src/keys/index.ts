import { ES256, ES384, ES512 } from './ecdsa';
import { HS256, HS384, HS512 } from './hs';
import { PS } from './ps';
import { RSA } from './rsa';

export enum Algorithm {
  HS256 = 'HS256',
  HS384 = 'HS384',
  HS512 = 'HS512',
  RS256 = 'RS256',
  RS384 = 'RS384',
  RS512 = 'RS512',
  PS256 = 'PS256',
  PS384 = 'PS384',
  PS512 = 'PS512',
  ES256 = 'ES256',
  ES384 = 'ES384',
  ES512 = 'ES512',
}

export const keys = Object.freeze({
  [Algorithm.HS256]: HS256,
  [Algorithm.HS384]: HS384,
  [Algorithm.HS512]: HS512,
  [Algorithm.RS256]: RSA,
  [Algorithm.RS384]: RSA,
  [Algorithm.RS512]: RSA,
  [Algorithm.PS256]: PS,
  [Algorithm.PS384]: PS,
  [Algorithm.PS512]: PS,
  [Algorithm.ES256]: ES256,
  [Algorithm.ES384]: ES384,
  [Algorithm.ES512]: ES512,
});

export type HMACAlgorithm = Algorithm.HS256 | Algorithm.HS384 | Algorithm.HS512;
export type AsymmetricAlgorithm = Exclude<Algorithm, HMACAlgorithm>;
