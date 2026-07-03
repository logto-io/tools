import {
  createToolI18nBridge,
  type Language,
  type StrictResources,
  type ToolI18nBridge,
  withNamespace,
} from '@logto/tools-i18nova';

import type explorerEn from './locales/en';

export const oauthProvidersExplorerNamespace = 'oauth_providers';

export type OAuthProvidersExplorerPhrases = typeof explorerEn;

export type OAuthProvidersExplorerLocalePhrase = {
  oauth_providers: OAuthProvidersExplorerPhrases;
};

export type OAuthProvidersExplorerI18nAdapter = ToolI18nBridge<OAuthProvidersExplorerPhrases>;

export const oauthProvidersExplorerResources: StrictResources<
  Language,
  OAuthProvidersExplorerLocalePhrase
> = {
  ar: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/ar')),
  de: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/de')),
  en: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/en')),
  es: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/es')),
  fi: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/fi')),
  fr: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/fr')),
  it: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/it')),
  ja: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/ja')),
  ko: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/ko')),
  nl: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/nl')),
  'pl-PL': async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/pl-pl')),
  'pt-BR': async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/pt-br')),
  'pt-PT': async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/pt-pt')),
  ru: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/ru')),
  sv: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/sv')),
  th: async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/th')),
  'tr-TR': async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/tr-tr')),
  'zh-CN': async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/zh-cn')),
  'zh-HK': async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/zh-hk')),
  'zh-TW': async () =>
    withNamespace(oauthProvidersExplorerNamespace, async () => import('./locales/zh-tw')),
};

const {
  ToolI18nProvider: I18nProvider,
  useToolI18n,
  useToolDirection,
} = createToolI18nBridge<OAuthProvidersExplorerPhrases>();

export const usePhrases = () => {
  const { t, getObject } = useToolI18n();

  return {
    t,
    translate: t,
    getObject,
  };
};

export { I18nProvider, useToolDirection };

export { fallbackLanguage, languageTitles, languages, type Language } from '@logto/tools-i18nova';
