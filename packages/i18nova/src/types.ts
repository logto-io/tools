import { type DeepPartial } from '@silverhand/essentials';

export type BasePhrases = Readonly<Record<string, unknown>>;

export type MayBeImport<T> = T | (() => Promise<Record<'default', T>>);

export type Resources<Languages extends string, Phrases extends BasePhrases> = Record<
  Languages,
  MayBeImport<DeepPartial<Phrases>>
>;

export type StrictResources<Languages extends string, Phrases extends BasePhrases> = Record<
  Languages,
  MayBeImport<Phrases>
>;

type PhrasesKeyOfRecord<T extends Record<string, unknown>, Prefix extends string> = {
  [K in keyof T]: K extends string
    ? T[K] extends Record<string, unknown>
      ? PhrasesKeyOfRecord<T[K], `${Prefix}${K}.`>
      : `${Prefix}${K}`
    : never;
}[keyof T];

export type PhrasesKey<T> = T extends BasePhrases ? PhrasesKeyOfRecord<T, ''> : never;

type PhrasesObjectKeyOfRecord<T extends Record<string, unknown>, Prefix extends string> = {
  [K in keyof T]: K extends string
    ? T[K] extends Record<string, unknown>
      ? `${Prefix}${K}` | PhrasesObjectKeyOfRecord<T[K], `${Prefix}${K}.`>
      : T[K] extends unknown[]
        ? `${Prefix}${K}`
        : never
    : never;
}[keyof T];

export type PhrasesObjectKey<T> = T extends BasePhrases ? PhrasesObjectKeyOfRecord<T, ''> : never;

export type PhrasesKeyType<
  T extends string,
  P extends BasePhrases,
> = T extends `${infer Prefix}.${infer Rest}`
  ? P[Prefix] extends BasePhrases
    ? PhrasesKeyType<Rest, P[Prefix]>
    : never
  : T extends keyof P
    ? P[T]
    : never;

export type TranslateParams = Record<string, string | number>;
