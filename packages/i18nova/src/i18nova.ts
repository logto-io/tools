import { type DeepPartial } from '@silverhand/essentials';

import {
  type TranslateParams,
  type BasePhrases,
  type PhrasesKey,
  type Resources,
  type PhrasesObjectKey,
  type PhrasesKeyType,
} from './types';
import { getPhrasesObject, getPhraseSync, replaceParams } from './utilts';

export class I18Nova<Language extends string, Phrases extends BasePhrases = BasePhrases> {
  constructor(
    protected resources: Resources<Language, Phrases>,
    public readonly defaultLanguage: NoInfer<Language>
  ) {}

  translate(
    lang: Language | undefined,
    key: PhrasesKey<Phrases>,
    params?: TranslateParams
  ): string {
    if (!lang || lang === this.defaultLanguage) {
      return replaceParams(getPhraseSync(this.resources[this.defaultLanguage], key) ?? key, params);
    }
    return replaceParams(
      getPhraseSync(this.resources[lang], key) ??
        getPhraseSync(this.resources[this.defaultLanguage], key) ??
        key,
      params
    );
  }

  getObject<Key extends PhrasesObjectKey<Phrases>>(
    lang: Language | undefined,
    key: Key
  ): PhrasesKeyType<Key, Phrases> | undefined {
    if (!lang || lang === this.defaultLanguage) {
      // eslint-disable-next-line no-restricted-syntax
      return getPhrasesObject(this.resources[this.defaultLanguage], key) as
        | PhrasesKeyType<Key, Phrases>
        | undefined;
    }

    // eslint-disable-next-line no-restricted-syntax
    return (getPhrasesObject(this.resources[lang], key) ??
      getPhrasesObject(this.resources[this.defaultLanguage], key)) as
      | PhrasesKeyType<Key, Phrases>
      | undefined;
  }

  setPhrases(lang: Language, phrases: DeepPartial<Phrases>, options: { override?: boolean } = {}) {
    if (options.override) {
      this.resources[lang] = { ...phrases };
      return;
    }

    this.resources[lang] = { ...this.resources[lang], ...phrases };
  }

  async loadPhrases(lang: Language): Promise<DeepPartial<Phrases>> {
    const { [lang]: phrases } = this.resources;

    if (typeof phrases === 'function') {
      const { default: loaded } = await phrases();
      this.resources[lang] = loaded;
      return loaded;
    }

    // eslint-disable-next-line no-restricted-syntax -- TypeScript does not narrow the type correctly
    return phrases as DeepPartial<Phrases>;
  }

  hasLoaded(lang: Language) {
    return typeof this.resources[lang] !== 'function';
  }
}
