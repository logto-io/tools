import type en from './en';

const sv = {
  topbar: {
    banner_text:
      'Bygg och förhandsgranska publika verktyg i en utvecklingsapp som matchar webbplatsen.',
    banner_link: 'Verktygsindex',
    developers: 'Utvecklare',
    tools: 'Verktyg',
    language: 'Språk',
    github_star: '9,5k stjärnor',
    sign_in: 'Logga in',
    get_started: 'Kom igång',
  },
  home: {
    label: 'Utvecklarverktyg',
    title: 'Publika verktyg.',
    description:
      'Den här appen speglar den övre delen av den riktiga webbplatsen så att varje verktyg kan utvecklas och granskas i ett produktionslikt skal, med en dedikerad route per verktyg.',
    tags: {
      topbar: 'Topbar i Logto-stil',
      routes: 'Dedikerade verktygsrutter',
      i18n: 'Delat i18n-kontrakt',
    },
    planned: 'Planerat',
    coming_next: 'Kommer snart',
    available_now: 'Tillgängligt nu',
    open_tool: 'Öppna verktyg',
  },
  tools: {
    jwtDecoder: {
      title: 'JWT-avkodare',
      description:
        'Avkoda, inspektera, redigera och signera om JWT i en webbplatsanpassad arbetsyta.',
    },
    samlDecoder: {
      title: 'SAML-assertionsavkodare',
      description: 'Nästa steg: inspektera XML-assertions i samma verktygsskal.',
    },
    base64Decoder: {
      title: 'Base64-avkodare',
      description: 'Nästa steg: snabb granskning av binära och textbaserade payloads.',
    },
  },
};

export default sv satisfies typeof en;
