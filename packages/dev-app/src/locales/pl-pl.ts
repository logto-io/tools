import type en from './en';

const plPL = {
  topbar: {
    banner_text: 'Twórz i testuj publiczne narzędzia w aplikacji deweloperskiej zgodnej z witryną.',
    banner_link: 'Indeks narzędzi',
    developers: 'Deweloperzy',
    tools: 'Narzędzia',
    language: 'Język',
    github_star: '9,5 tys. gwiazdek',
    sign_in: 'Zaloguj się',
    get_started: 'Zacznij',
  },
  home: {
    label: 'Narzędzia deweloperskie',
    title: 'Publiczne narzędzia.',
    description:
      'Ta aplikacja odwzorowuje górny obszar prawdziwej strony, aby każde narzędzie można było rozwijać i przeglądać w środowisku zbliżonym do produkcji, zachowując dedykowaną trasę.',
    tags: {
      topbar: 'Topbar w stylu Logto',
      routes: 'Dedykowane trasy narzędzi',
      i18n: 'Wspólny kontrakt i18n',
    },
    planned: 'Planowane',
    coming_next: 'Wkrótce',
    available_now: 'Dostępne teraz',
    open_tool: 'Otwórz narzędzie',
  },
  tools: {
    jwtDecoder: {
      title: 'Dekoder JWT',
      description:
        'Dekoduj, analizuj, edytuj i ponownie podpisuj JWT w przestrzeni zgodnej z witryną.',
    },
    samlDecoder: {
      title: 'Dekoder asercji SAML',
      description: 'Następnie: analiza asercji XML w tej samej powłoce narzędzi.',
    },
    base64Decoder: {
      title: 'Koder i dekoder Base64',
      description: 'Koduj i dekoduj dane Base64 oraz Base64URL bezpośrednio w przeglądarce.',
    },
  },
};

export default plPL satisfies typeof en;
