import {
  createToolI18nBridge,
  type Language,
  type StrictResources,
  type ToolI18nBridge,
  withNamespace,
} from '@logto/tools-i18nova';

import type decoderEn from './locales/en';

export const jwtDecoderNamespace = 'jwt_decoder';

export type JwtDecoderPhrases = typeof decoderEn;

export type JwtDecoderLocalePhrase = {
  jwt_decoder: JwtDecoderPhrases;
};

export type JwtDecoderI18nAdapter = ToolI18nBridge<JwtDecoderPhrases>;

export const jwtDecoderResources: StrictResources<Language, JwtDecoderLocalePhrase> = {
  ar: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/ar')),
  de: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/de')),
  en: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/en')),
  es: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/es')),
  fi: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/fi')),
  fr: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/fr')),
  it: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/it')),
  ja: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/ja')),
  ko: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/ko')),
  nl: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/nl')),
  'pl-PL': async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/pl-pl')),
  'pt-BR': async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/pt-br')),
  'pt-PT': async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/pt-pt')),
  ru: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/ru')),
  sv: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/sv')),
  th: async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/th')),
  'tr-TR': async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/tr-tr')),
  'zh-CN': async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/zh-cn')),
  'zh-HK': async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/zh-hk')),
  'zh-TW': async () => withNamespace(jwtDecoderNamespace, async () => import('./locales/zh-tw')),
};

const { ToolI18nProvider: I18nProvider, useToolI18n } = createToolI18nBridge<JwtDecoderPhrases>();

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
