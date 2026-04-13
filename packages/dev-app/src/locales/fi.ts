import type en from './en';

const fi = {
  topbar: {
    banner_text:
      'Rakenna ja esikatsele julkisia työkaluja verkkosivua vastaavassa dev-sovelluksessa.',
    banner_link: 'Työkaluhakemisto',
    developers: 'Kehittäjät',
    tools: 'Työkalut',
    language: 'Kieli',
    github_star: '9,5k tähteä',
    sign_in: 'Kirjaudu sisään',
    get_started: 'Aloita',
  },
  home: {
    label: 'Kehittäjätyökalut',
    title: 'Julkiset työkalut.',
    description:
      'Tämä sovellus peilaa oikean verkkosivun yläosan, jotta jokainen työkalu voidaan kehittää ja tarkistaa tuotantoa muistuttavassa ympäristössä oman reittinsä kanssa.',
    tags: {
      topbar: 'Logto-tyylinen yläpalkki',
      routes: 'Omistetut työkalureitit',
      i18n: 'Yhteinen i18n-sopimus',
    },
    planned: 'Suunniteltu',
    coming_next: 'Tulossa',
    available_now: 'Saatavilla nyt',
    open_tool: 'Avaa työkalu',
  },
  tools: {
    jwtDecoder: {
      title: 'JWT-dekooderi',
      description:
        'Dekoodaa, tarkasta, muokkaa ja allekirjoita JWT uudelleen verkkosivun kaltaisessa työtilassa.',
    },
    samlDecoder: {
      title: 'SAML-väitteen dekooderi',
      description: 'Seuraavaksi suunnitteilla: XML-väitteiden tarkastelu samalla työkalukuorella.',
    },
    base64Decoder: {
      title: 'Base64-dekooderi',
      description: 'Seuraavaksi suunnitteilla: tekstin ja binääridatan nopea tarkastelu.',
    },
  },
};

export default fi satisfies typeof en;
