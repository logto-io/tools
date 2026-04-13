import {
  useCallback,
  createContext,
  useContext,
  type ReactNode,
  useMemo,
  useEffect,
  useRef,
  useState,
} from 'react';

import { type I18Nova } from '../i18nova';
import { direction } from '../public-utils';
import {
  type PhrasesKey,
  type BasePhrases,
  type TranslateParams,
  type PhrasesObjectKey,
  type PhrasesKeyType,
} from '../types';

export * from './Trans';

type AvailablePrefixes<T extends string> = T extends `${infer Prefix}.${infer Rest}`
  ? Prefix | `${Prefix}.${AvailablePrefixes<Rest>}`
  : never;

type StripPrefix<T extends string, Prefix extends string> = T extends `${Prefix}.${infer Rest}`
  ? Rest
  : T;

type I18NovaContextType<Language extends string, Phrases extends BasePhrases> = {
  i18Nova: I18Nova<Language, Phrases>;
  currentLanguage?: Language;
};

const GlobalCurrentLanguageContext = createContext<string | undefined>(undefined);

type I18NovaContextProviderProps<Language extends string> = {
  readonly children: ReactNode;
  readonly currentLanguage: Language;
};

export const create = <Language extends string, Phrases extends BasePhrases>(
  i18Nova: I18Nova<Language, Phrases>
) => {
  const I18NovaContext = createContext<I18NovaContextType<Language, Phrases>>({ i18Nova });
  const I18NovaProvider = ({
    children,
    currentLanguage,
  }: I18NovaContextProviderProps<Language>) => {
    // Use to force re-render when lazy loading phrases is done
    const [state, setState] = useState(0);
    const [language, setLanguage] = useState(currentLanguage);
    const requestIdRef = useRef(0);
    const value = useMemo(() => ({ i18Nova, currentLanguage: language }), [language]);

    useEffect(() => {
      // Keep context language in sync with prop regardless of loading state.
      setLanguage(currentLanguage);

      if (i18Nova.hasLoaded(currentLanguage)) {
        setState(Math.random());
        return;
      }

      const requestId = requestIdRef.current + 1;
      // eslint-disable-next-line @silverhand/fp/no-mutation
      requestIdRef.current = requestId;

      (async () => {
        await i18Nova.loadPhrases(currentLanguage);

        if (requestIdRef.current !== requestId) {
          return;
        }

        setState(Math.random());
      })();
    }, [currentLanguage]);

    return (
      <GlobalCurrentLanguageContext.Provider value={language}>
        <I18NovaContext.Provider key={`${language}.${state}`} value={value}>
          {children}
        </I18NovaContext.Provider>
      </GlobalCurrentLanguageContext.Provider>
    );
  };

  const useCurrentLanguage = () => {
    const context = useContext(I18NovaContext);
    const currentLanguage = useMemo(() => {
      if (context.currentLanguage === undefined) {
        console.warn(
          'No current language set in context, maybe you forgot to wrap your app with `I18NovaProvider`?'
        );
      }

      return context.currentLanguage ?? i18Nova.defaultLanguage;
    }, [context.currentLanguage]);
    return currentLanguage;
  };

  const useDirection = (): 'rtl' | 'ltr' => {
    const lang = useCurrentLanguage();
    return useMemo(() => direction(lang), [lang]);
  };

  const usePhrases = <Prefix extends AvailablePrefixes<PhrasesKey<Phrases>> = never>(
    keyPrefix?: Prefix
  ) => {
    const lang = useCurrentLanguage();
    const translate = useCallback(
      (key: StripPrefix<PhrasesKey<Phrases>, Prefix>, params?: TranslateParams) =>
        typeof keyPrefix === 'string' && keyPrefix.length > 0
          ? // eslint-disable-next-line no-restricted-syntax -- too complex to infer
            i18Nova.translate(lang, `${keyPrefix}.${key}` as PhrasesKey<Phrases>, params)
          : // eslint-disable-next-line no-restricted-syntax -- too complex to infer
            i18Nova.translate(lang, key as PhrasesKey<Phrases>, params),
      [keyPrefix, lang]
    );

    type GetObjectReturn<Key extends string> = Prefix extends string
      ? '' extends Prefix
        ? PhrasesKeyType<Key, Phrases> | undefined
        : PhrasesKeyType<`${Prefix}.${Key}`, Phrases> | undefined
      : PhrasesKeyType<Key, Phrases> | undefined;

    const getObject = useCallback(
      <Key extends StripPrefix<PhrasesObjectKey<Phrases>, Prefix>>(
        key: Key
      ): GetObjectReturn<Key> =>
        // eslint-disable-next-line no-restricted-syntax -- too complex to infer
        (typeof keyPrefix === 'string' && keyPrefix.length > 0
          ? // eslint-disable-next-line no-restricted-syntax
            i18Nova.getObject(lang, `${keyPrefix}.${key as string}` as PhrasesObjectKey<Phrases>)
          : // eslint-disable-next-line no-restricted-syntax
            i18Nova.getObject(lang, key as PhrasesObjectKey<Phrases>)) as GetObjectReturn<Key>,
      [keyPrefix, lang]
    );

    return { translate, t: translate, getObject };
  };

  return {
    useCurrentLanguage,
    useDirection,
    usePhrases,
    I18NovaContext,
    I18NovaProvider,
  };
};

export const useGlobalCurrentLanguage = (): string | undefined => {
  return useContext(GlobalCurrentLanguageContext);
};
