import type en from './en';

const nl = {
  topbar: {
    banner_text: 'Bouw en bekijk publieke tools in een dev-app die overeenkomt met de website.',
    banner_link: 'Tooloverzicht',
    developers: 'Ontwikkelaars',
    tools: 'Tools',
    language: 'Taal',
    github_star: '9,5k sterren',
    sign_in: 'Inloggen',
    get_started: 'Aan de slag',
  },
  home: {
    label: 'Ontwikkelaarstools',
    title: 'Publieke tools.',
    description:
      'Deze app weerspiegelt het bovenste gedeelte van de echte website zodat elke tool in een productieachtige shell kan worden ontwikkeld en beoordeeld, met behoud van een eigen route.',
    tags: {
      topbar: 'Logto-stijl topbar',
      routes: 'Specifieke toolroutes',
      i18n: 'Gedeeld i18n-contract',
    },
    planned: 'Gepland',
    coming_next: 'Binnenkort',
    available_now: 'Nu beschikbaar',
    open_tool: 'Tool openen',
  },
  tools: {
    jwtDecoder: {
      title: 'JWT-decoder',
      description:
        'Decodeer, inspecteer, bewerk en onderteken JWT’s opnieuw in een website-uitgelijnde werkruimte.',
    },
    samlDecoder: {
      title: 'SAML-assertie-decoder',
      description: 'Volgende stap: XML-asserties inspecteren met dezelfde toolshell.',
    },
    base64Decoder: {
      title: 'Base64-encoder en -decoder',
      description: 'Codeer en decodeer Base64- en Base64URL-gegevens direct in de browser.',
    },
    oauthProvidersExplorer: {
      title: 'OAuth & OIDC Providers Explorer',
      description:
        'Zoek snel naar OAuth- eindpunten en verwante ontwikkelingsbronnen voor populaire OAuth- & OIDC- providers.',
    },
  },
};

export default nl satisfies typeof en;
