import type Prism from 'prismjs';

export const jwtGrammar: Prism.Grammar = {
  header: {
    pattern: /^[^.]+(?=\.)/, // Matches the header part
    alias: 'tokenHeader',
  },
  payload: {
    pattern: /(?<=\.)[^.]+(?=\.)/, // Matches the payload part
    alias: 'tokenPayload',
  },
  signature: {
    pattern: /(?<=\.)[^.]+$/, // Matches the signature part
    alias: 'tokenSignature',
  },
};
