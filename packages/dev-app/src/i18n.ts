import {
  base64DecoderResources,
  type Base64DecoderLocalePhrase,
} from '@logto/tools-base64-decoder';
import {
  fallbackLanguage,
  I18Nova,
  ReactI18Nova,
  resolveMayBeImport,
  type Language,
  type StrictResources,
  withNamespace,
} from '@logto/tools-i18nova';
import { jwtDecoderResources, type JwtDecoderLocalePhrase } from '@logto/tools-jwt-decoder';
import {
  oauthProvidersExplorerResources,
  type OAuthProvidersExplorerLocalePhrase,
} from '@logto/tools-oauth-providers-explorer';

import type en from './locales/en';

export { fallbackLanguage, languages, languageTitles } from '@logto/tools-i18nova';
export type { Language } from '@logto/tools-i18nova';

export type LocalePhrase = {
  dev_app: typeof en;
} & JwtDecoderLocalePhrase &
  Base64DecoderLocalePhrase &
  OAuthProvidersExplorerLocalePhrase;

const mergeLocale = async (
  language: Language,
  loader: () => Promise<{ default: typeof en }>
): Promise<{ default: LocalePhrase }> => {
  const [devAppLocale, jwtDecoderLocale, base64DecoderLocale, oauthProvidersExplorerLocale] =
    await Promise.all([
      withNamespace('dev_app', loader),
      resolveMayBeImport(jwtDecoderResources[language]),
      resolveMayBeImport(base64DecoderResources[language]),
      resolveMayBeImport(oauthProvidersExplorerResources[language]),
    ]);

  return {
    default: {
      ...devAppLocale.default,
      ...jwtDecoderLocale.default,
      ...base64DecoderLocale.default,
      ...oauthProvidersExplorerLocale.default,
    },
  };
};

const resources: StrictResources<Language, LocalePhrase> = {
  ar: async () => mergeLocale('ar', async () => import('./locales/ar')),
  de: async () => mergeLocale('de', async () => import('./locales/de')),
  en: async () => mergeLocale('en', async () => import('./locales/en')),
  es: async () => mergeLocale('es', async () => import('./locales/es')),
  fi: async () => mergeLocale('fi', async () => import('./locales/fi')),
  fr: async () => mergeLocale('fr', async () => import('./locales/fr')),
  it: async () => mergeLocale('it', async () => import('./locales/it')),
  ja: async () => mergeLocale('ja', async () => import('./locales/ja')),
  ko: async () => mergeLocale('ko', async () => import('./locales/ko')),
  nl: async () => mergeLocale('nl', async () => import('./locales/nl')),
  'pl-PL': async () => mergeLocale('pl-PL', async () => import('./locales/pl-pl')),
  'pt-BR': async () => mergeLocale('pt-BR', async () => import('./locales/pt-br')),
  'pt-PT': async () => mergeLocale('pt-PT', async () => import('./locales/pt-pt')),
  ru: async () => mergeLocale('ru', async () => import('./locales/ru')),
  sv: async () => mergeLocale('sv', async () => import('./locales/sv')),
  th: async () => mergeLocale('th', async () => import('./locales/th')),
  'tr-TR': async () => mergeLocale('tr-TR', async () => import('./locales/tr-tr')),
  'zh-CN': async () => mergeLocale('zh-CN', async () => import('./locales/zh-cn')),
  'zh-HK': async () => mergeLocale('zh-HK', async () => import('./locales/zh-hk')),
  'zh-TW': async () => mergeLocale('zh-TW', async () => import('./locales/zh-tw')),
};

export const i18Nova = new I18Nova(resources, fallbackLanguage);

const { I18NovaProvider, useCurrentLanguage, useDirection, usePhrases } =
  ReactI18Nova.create(i18Nova);

export { I18NovaProvider, useCurrentLanguage, useDirection, usePhrases };
