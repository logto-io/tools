import { type AsymmetricAlgorithm, type Algorithm, type HMACAlgorithm } from './keys';

export enum EditorMode {
  Decode = 'decode',
  Encode = 'encode',
}

export type HMACSecrets = {
  algorithm: HMACAlgorithm;
  secret?: string;
  base64Encoded?: boolean;
};

export type AsymmetricSecrets = {
  algorithm: AsymmetricAlgorithm;
  publicKey?: string;
  privateKey?: string;
  jwksUrl?: string;
};

export type Secrets = HMACSecrets | AsymmetricSecrets;

export type SecretMap = {
  [K in Algorithm]?: K extends AsymmetricAlgorithm
    ? AsymmetricSecrets
    : K extends HMACAlgorithm
      ? HMACSecrets
      : never;
};
