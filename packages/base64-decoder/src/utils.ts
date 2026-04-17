export class Base64DecodeError extends Error {
  constructor(message = 'Invalid Base64 input') {
    super(message);
    this.name = 'Base64DecodeError';
  }
}

const bytesToBinaryString = (bytes: Uint8Array): string =>
  Array.from(bytes, (byte) => String.fromCodePoint(byte)).join('');

const binaryStringToBytes = (binary: string): Uint8Array =>
  Uint8Array.from(binary, (char) => char.codePointAt(0) ?? 0);

/**
 * Encode a UTF-8 string to Base64.
 *
 * When `urlSafe` is true the output uses the Base64URL alphabet (`-` and `_`) and has
 * trailing `=` padding stripped, following the convention used by JWT and OAuth.
 */
export const encodeBase64 = (input: string, urlSafe = false): string => {
  if (input === '') {
    return '';
  }

  const bytes = new TextEncoder().encode(input);
  // eslint-disable-next-line no-restricted-globals -- Browser-standard Base64 primitive.
  const standard = btoa(bytesToBinaryString(bytes));

  if (!urlSafe) {
    return standard;
  }

  return standard.replaceAll('+', '-').replaceAll('/', '_').replaceAll(/=+$/g, '');
};

/**
 * Decode a Base64 (or Base64URL) string into a UTF-8 string.
 *
 * Accepts both the standard and URL-safe alphabets and is tolerant of missing padding
 * and embedded whitespace so users can paste from any source. Throws {@link Base64DecodeError}
 * when the input does not form a valid Base64 sequence or is not valid UTF-8.
 */
export const decodeBase64 = (input: string): string => {
  const trimmed = input.replaceAll(/\s+/g, '');

  if (trimmed === '') {
    return '';
  }

  const normalized = trimmed.replaceAll('-', '+').replaceAll('_', '/').replaceAll(/=+$/g, '');

  if (!/^[\d+/A-Za-z]*$/.test(normalized)) {
    throw new Base64DecodeError();
  }

  const paddingNeeded = (4 - (normalized.length % 4)) % 4;

  if (paddingNeeded === 3) {
    throw new Base64DecodeError();
  }

  const padded = normalized + '='.repeat(paddingNeeded);

  try {
    // eslint-disable-next-line no-restricted-globals -- Browser-standard Base64 primitive.
    const binary = atob(padded);
    const bytes = binaryStringToBytes(binary);
    return new TextDecoder('utf8', { fatal: true }).decode(bytes);
  } catch {
    throw new Base64DecodeError();
  }
};
