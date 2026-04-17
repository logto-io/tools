import { describe, expect, it } from 'vitest';

import { Base64DecodeError, decodeBase64, encodeBase64 } from './utils';

describe('encodeBase64', () => {
  it('returns empty string for empty input', () => {
    expect(encodeBase64('')).toBe('');
    expect(encodeBase64('', true)).toBe('');
  });

  it('encodes ASCII with standard alphabet by default', () => {
    expect(encodeBase64('hello')).toBe('aGVsbG8=');
    expect(encodeBase64('Man')).toBe('TWFu');
  });

  it('encodes UTF-8 multibyte characters', () => {
    expect(encodeBase64('héllo')).toBe('aMOpbGxv');
    expect(encodeBase64('你好')).toBe('5L2g5aW9');
    expect(encodeBase64('🎉')).toBe('8J+OiQ==');
  });

  it('produces URL-safe output when urlSafe is true', () => {
    // Input chosen so its standard Base64 contains both `+` and `/`.
    const input = '??>???';
    expect(encodeBase64(input)).toBe('Pz8+Pz8/');
    expect(encodeBase64(input, true)).toBe('Pz8-Pz8_');
  });

  it('strips trailing = padding in URL-safe mode', () => {
    expect(encodeBase64('hello', true)).toBe('aGVsbG8');
    expect(encodeBase64('f', true)).toBe('Zg');
  });
});

describe('decodeBase64', () => {
  it('returns empty string for empty input', () => {
    expect(decodeBase64('')).toBe('');
    expect(decodeBase64('   \n  ')).toBe('');
  });

  it('decodes standard Base64', () => {
    expect(decodeBase64('aGVsbG8=')).toBe('hello');
    expect(decodeBase64('TWFu')).toBe('Man');
  });

  it('decodes URL-safe Base64 (with and without padding)', () => {
    expect(decodeBase64('aGVsbG8')).toBe('hello');
    expect(decodeBase64('aGVsbG8=')).toBe('hello');
    // Contains `-` and `_` (URL-safe alphabet)
    const encoded = encodeBase64('\u00FB\u00FF\u00BE', true);
    expect(decodeBase64(encoded)).toBe('\u00FB\u00FF\u00BE');
  });

  it('decodes UTF-8 multibyte content', () => {
    expect(decodeBase64('5L2g5aW9')).toBe('你好');
    expect(decodeBase64('8J+OiQ==')).toBe('🎉');
  });

  it('tolerates embedded whitespace and newlines', () => {
    expect(decodeBase64('aGVs\n bG8=')).toBe('hello');
  });

  it('throws Base64DecodeError on invalid characters', () => {
    expect(() => decodeBase64('!!!not-base64!!!')).toThrow(Base64DecodeError);
  });

  it('throws Base64DecodeError on malformed length', () => {
    // A single padding-less char is never a valid Base64 encoding.
    expect(() => decodeBase64('A')).toThrow(Base64DecodeError);
  });

  it('throws Base64DecodeError on invalid UTF-8 bytes', () => {
    // 0xff alone is not a valid UTF-8 start byte
    expect(() => decodeBase64('/w==')).toThrow(Base64DecodeError);
  });
});

describe('round-trip', () => {
  it.each([
    ['simple', 'hello world'],
    ['empty', ''],
    ['unicode', 'héllo 🎉 你好'],
    ['newlines', 'line1\nline2\n'],
    ['long', 'a'.repeat(1000)],
  ])('%s survives encode+decode', (_name, input) => {
    expect(decodeBase64(encodeBase64(input))).toBe(input);
    expect(decodeBase64(encodeBase64(input, true))).toBe(input);
  });
});
