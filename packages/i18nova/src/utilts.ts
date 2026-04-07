import { isKeyInObject } from '@silverhand/essentials';

import { type MayBeImport, type BasePhrases, type TranslateParams } from './types';

export const getPhraseSync = (
  phrases: MayBeImport<BasePhrases>,
  key: string
): string | undefined => {
  if (typeof phrases === 'function') {
    return;
  }

  return getPhrase(phrases, key);
};

export const getPhrase = (phrases: BasePhrases, key: string): string | undefined => {
  // eslint-disable-next-line @silverhand/fp/no-let
  let result: Record<string, unknown> | unknown = phrases;

  for (const current of key.split('.')) {
    if (isKeyInObject(result, current)) {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      result = result[current];
    } else {
      return;
    }
  }

  return typeof result === 'string' ? result : undefined;
};

export const getPhrasesObject = (
  phrases: unknown,
  key: string
  // eslint-disable-next-line @typescript-eslint/ban-types
): object | unknown[] | undefined => {
  // eslint-disable-next-line @silverhand/fp/no-let
  let result: Record<string, unknown> | unknown = phrases;

  for (const current of key.split('.')) {
    if (isKeyInObject(result, current)) {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      result = result[current];
    } else {
      return;
    }
  }

  return Array.isArray(result) || (typeof result === 'object' && result !== null)
    ? result
    : undefined;
};

export const replaceParams = (phrase: string, params?: TranslateParams) =>
  phrase.replaceAll(/{{\s*(\w+)\s*}}/g, (_, key: string) => params?.[key]?.toString() ?? key);
