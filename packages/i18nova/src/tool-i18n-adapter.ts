import { createContext, createElement, useContext, type ReactNode } from 'react';

import type { Language } from './language';
import type {
  BasePhrases,
  PhrasesKey,
  PhrasesKeyType,
  PhrasesObjectKey,
  TranslateParams,
} from './types';

/**
 * Host-provided i18n bridge consumed by tool components.
 *
 * The host app (website/dev-app) owns the real i18n provider and passes the resolved methods
 * from host hooks into tool roots through this plain interface.
 */
export type ToolI18nBridge<
  Phrases extends BasePhrases,
  CurrentLanguage extends Language = Language,
> = {
  readonly currentLanguage: CurrentLanguage;
  readonly t: (key: PhrasesKey<Phrases>, params?: TranslateParams) => string;
  readonly getObject: <Key extends PhrasesObjectKey<Phrases>>(
    key: Key
  ) => PhrasesKeyType<Key, Phrases> | undefined;
  readonly direction?: 'rtl' | 'ltr';
};

/**
 * Build reusable React context bindings for tool packages.
 *
 * Every tool can reuse this to expose a top-level provider and consume the
 * host-injected i18n bridge.
 */
export const createToolI18nBridge = <
  Phrases extends BasePhrases,
  CurrentLanguage extends Language = Language,
>() => {
  type Bridge = ToolI18nBridge<Phrases, CurrentLanguage>;
  const ToolI18nContext = createContext<Bridge | undefined>(undefined);

  /**
   * Top-level provider for a tool package.
   */
  const ToolI18nProvider = ({
    children,
    i18n,
  }: {
    readonly children: ReactNode;
    readonly i18n: Bridge;
  }) => createElement(ToolI18nContext.Provider, { value: i18n }, children);

  const useToolI18n = (): Bridge => {
    const context = useContext(ToolI18nContext);

    if (!context) {
      throw new TypeError('Tool component requires an i18n adapter from the consumer app.');
    }

    return context;
  };

  /**
   * Read current language from the host-injected tool bridge.
   */
  const useToolCurrentLanguage = (): CurrentLanguage => {
    const { currentLanguage } = useToolI18n();

    return currentLanguage;
  };

  /**
   * Read writing direction from the host-injected tool bridge.
   *
   * The host should pass a resolved direction value when creating the bridge.
   */
  const useToolDirection = (): 'rtl' | 'ltr' => {
    const { direction } = useToolI18n();

    return direction ?? 'ltr';
  };

  return {
    ToolI18nProvider,
    useToolI18n,
    useToolCurrentLanguage,
    useToolDirection,
  };
};
