export const direction = (lang: string) =>
  ['ar', 'he', 'fa'].includes(lang.slice(0, 2)) ? 'rtl' : 'ltr';
