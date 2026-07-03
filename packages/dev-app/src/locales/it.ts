import type en from './en';

const it = {
  topbar: {
    banner_text: 'Crea e prova strumenti pubblici in una dev app allineata al sito.',
    banner_link: 'Indice strumenti',
    developers: 'Sviluppatori',
    tools: 'Strumenti',
    language: 'Lingua',
    github_star: '9,5k stelle',
    sign_in: 'Accedi',
    get_started: 'Inizia',
  },
  home: {
    label: 'Strumenti per sviluppatori',
    title: 'Strumenti pubblici.',
    description:
      'Questa app replica l’area superiore del sito reale così ogni strumento può essere sviluppato e revisionato in una shell simile alla produzione, mantenendo la propria route dedicata.',
    tags: {
      topbar: 'Topbar stile Logto',
      routes: 'Route dedicate per strumento',
      i18n: 'Contratto i18n condiviso',
    },
    planned: 'Pianificato',
    coming_next: 'In arrivo',
    available_now: 'Disponibile ora',
    open_tool: 'Apri strumento',
  },
  tools: {
    jwtDecoder: {
      title: 'Decodificatore JWT',
      description: 'Decodifica, ispeziona, modifica e rifirma JWT in uno spazio allineato al sito.',
    },
    samlDecoder: {
      title: 'Decodificatore di asserzioni SAML',
      description: 'Prossimo passo: ispezionare asserzioni XML con la stessa shell strumenti.',
    },
    base64Decoder: {
      title: 'Codificatore e decodificatore Base64',
      description: 'Codifica e decodifica payload Base64 e Base64URL direttamente nel browser.',
    },
    oauthProvidersExplorer: {
      title: 'Esploratore dei provider OAuth & OIDC',
      description:
        'Trova rapidamente gli endpoint OAuth e le risorse di sviluppo correlate per i provider OAuth & OIDC più popolari.',
    },
  },
};

export default it satisfies typeof en;
