import { type Algorithm } from '../keys';
import { type HMACSecrets, type AsymmetricSecrets } from '../types';

export const sampleJWT =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1aWRfMTIzNDU2Nzg5MCIsIm5hbWUiOiJSYW55IiwiaWF0IjoxNzM1NjEzOTQzfQ.MrXw4IjPRb9FhG60NcxMRIGxXVKRpUe35JKqTnViPRTRXFHCVicYXJcy6TrKg1yZpIChC7-wvQ9tMgUeSJSQs2xbZ-I5AGbesJ73lCBhugnGMQN93dmkYdhI7nIg9nbCy1D4R9Eyi6hsZnlGDYt1dfcXaFcmJ6_nIuPHvSxE-1m0oBwQjUA2VjKL7g-AqO_1fsutri3eAcrs3kxY7aYec1Eunliw7pM_CJWvsRtV4eT7MO-OyzgSRBVTucUBSUHjxuqk6cyAIZzt6ZO5rIdoZusZuh_carj7scKUtrLNw4dXiTI4miWOVD46PmNFu37VYx0ztkSnRUgUY24opymjjw';

export const emptyHmacSecret: Omit<HMACSecrets, 'algorithm'> = { secret: '', base64Encoded: false };

export const emptyAsymmetricSecret: Omit<AsymmetricSecrets, 'algorithm'> = {
  publicKey: '',
  privateKey: '',
  jwksUrl: '',
};

export const buildDefaultHeader = (algorithm: Algorithm) => ({
  typ: 'JWT',
  alg: algorithm,
});

export const defaultPayload = {
  sub: 'uid_1234567890',
  name: 'Rany',
  iat: 1_735_613_943,
};

export enum QueryParam {
  Token = 'token',
}
