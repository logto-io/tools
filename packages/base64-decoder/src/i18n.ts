import {
  createToolI18nBridge,
  type Language,
  type StrictResources,
  type ToolI18nBridge,
  withNamespace,
} from '@logto/tools-i18nova';

import type decoderEn from './locales/en';

export const base64DecoderNamespace = 'base64_decoder';

export type Base64DecoderPhrases = typeof decoderEn;

export type Base64DecoderLocalePhrase = {
  base64_decoder: Base64DecoderPhrases;
};

export type Base64DecoderI18nAdapter = ToolI18nBridge<Base64DecoderPhrases>;

export const base64DecoderResources: StrictResources<Language, Base64DecoderLocalePhrase> = {
  ar: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/ar')),
  de: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/de')),
  en: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/en')),
  es: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/es')),
  fi: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/fi')),
  fr: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/fr')),
  it: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/it')),
  ja: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/ja')),
  ko: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/ko')),
  nl: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/nl')),
  'pl-PL': async () => withNamespace(base64DecoderNamespace, async () => import('./locales/pl-pl')),
  'pt-BR': async () => withNamespace(base64DecoderNamespace, async () => import('./locales/pt-br')),
  'pt-PT': async () => withNamespace(base64DecoderNamespace, async () => import('./locales/pt-pt')),
  ru: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/ru')),
  sv: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/sv')),
  th: async () => withNamespace(base64DecoderNamespace, async () => import('./locales/th')),
  'tr-TR': async () => withNamespace(base64DecoderNamespace, async () => import('./locales/tr-tr')),
  'zh-CN': async () => withNamespace(base64DecoderNamespace, async () => import('./locales/zh-cn')),
  'zh-HK': async () => withNamespace(base64DecoderNamespace, async () => import('./locales/zh-hk')),
  'zh-TW': async () => withNamespace(base64DecoderNamespace, async () => import('./locales/zh-tw')),
};

const { ToolI18nProvider: I18nProvider, useToolI18n } =
  createToolI18nBridge<Base64DecoderPhrases>();

export const usePhrases = () => {
  const { t, getObject } = useToolI18n();

  return {
    t,
    translate: t,
    getObject,
  };
};

export { I18nProvider };

export { fallbackLanguage, languageTitles, languages, type Language } from '@logto/tools-i18nova';
