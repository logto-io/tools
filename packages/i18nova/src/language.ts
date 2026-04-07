export const languages = Object.freeze([
  'ar',
  'de',
  'en',
  'es',
  'fi',
  'fr',
  'it',
  'ja',
  'ko',
  'nl',
  'pl-PL',
  'pt-PT',
  'pt-BR',
  'ru',
  'sv',
  'th',
  'tr-TR',
  'zh-CN',
  'zh-HK',
  'zh-TW',
] as const);

export type Language = (typeof languages)[number];

export const languageTitles: Record<Language, string> = {
  ar: 'العربية',
  de: 'Deutsch',
  en: 'English',
  es: 'Español',
  fi: 'Suomi',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  ko: '한국어',
  nl: 'Nederlands',
  'pl-PL': 'Polski',
  'pt-BR': 'Português (Brasil)',
  'pt-PT': 'Português (Portugal)',
  ru: 'Русский',
  sv: 'Svenska',
  th: 'ไทย',
  'tr-TR': 'Türkçe',
  'zh-CN': '简体中文',
  'zh-HK': '繁體中文（香港）',
  'zh-TW': '繁體中文（台灣）',
};

export const fallbackLanguage: Language = 'en';

export const findLanguage = (value?: string) => {
  return languages.find((language) => language.toLowerCase() === value?.toLowerCase());
};
