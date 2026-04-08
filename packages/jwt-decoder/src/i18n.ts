import {
  fallbackLanguage,
  I18Nova,
  ReactI18Nova,
  type Language,
  type Resources,
} from '@logto/tools-i18nova';

import type decoderEn from './locales/en';

export type LocalePhrase = {
  jwt_decoder: typeof decoderEn;
};

const wrapLocale = async (loader: () => Promise<{ default: typeof decoderEn }>) => {
  const module = await loader();

  return {
    default: {
      jwt_decoder: module.default,
    },
  };
};

const resources: Resources<Language, LocalePhrase> = {
  ar: async () => wrapLocale(async () => import('./locales/ar')),
  de: async () => wrapLocale(async () => import('./locales/de')),
  en: async () => wrapLocale(async () => import('./locales/en')),
  es: async () => wrapLocale(async () => import('./locales/es')),
  fi: async () => wrapLocale(async () => import('./locales/fi')),
  fr: async () => wrapLocale(async () => import('./locales/fr')),
  it: async () => wrapLocale(async () => import('./locales/it')),
  ja: async () => wrapLocale(async () => import('./locales/ja')),
  ko: async () => wrapLocale(async () => import('./locales/ko')),
  nl: async () => wrapLocale(async () => import('./locales/nl')),
  'pl-PL': async () => wrapLocale(async () => import('./locales/pl-pl')),
  'pt-BR': async () => wrapLocale(async () => import('./locales/pt-br')),
  'pt-PT': async () => wrapLocale(async () => import('./locales/pt-pt')),
  ru: async () => wrapLocale(async () => import('./locales/ru')),
  sv: async () => wrapLocale(async () => import('./locales/sv')),
  th: async () => wrapLocale(async () => import('./locales/th')),
  'tr-TR': async () => wrapLocale(async () => import('./locales/tr-tr')),
  'zh-CN': async () => wrapLocale(async () => import('./locales/zh-cn')),
  'zh-HK': async () => wrapLocale(async () => import('./locales/zh-hk')),
  'zh-TW': async () => wrapLocale(async () => import('./locales/zh-tw')),
};

export const i18Nova = new I18Nova(resources, fallbackLanguage);

const { I18NovaProvider, useCurrentLanguage, useDirection, usePhrases } =
  ReactI18Nova.create(i18Nova);

export { I18NovaProvider, useCurrentLanguage, useDirection, usePhrases };

export { languages, fallbackLanguage, languageTitles, type Language } from '@logto/tools-i18nova';
