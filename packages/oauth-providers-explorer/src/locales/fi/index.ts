const oauth_providers = {
  title: 'OAuth- ja OIDC-tarjoajien etsintätyökalu',
  description:
    'Etsi nopeasti OAuth-päätepisteitä ja liittyviä kehittämisresursseja suosituista OAuth- ja OIDC-tarjoajista.',
  hint: 'Kaikki tarjoajatiedot ovat peräisin virallisista dokumenteista, ja niihin on linkit jokaisella sivulla viitteeksi',
  app_title: 'OAuth- ja OIDC-tarjoajien <span>Etsintätyökalu</span>',
  search_placeholder: 'Etsi tarjoajaa (esim. GitHub, Google, Facebook)',
  clear_search: 'Tyhjennä haku',
  copy: 'Kopioi',
  copied: 'Kopioitu leikepöydälle',
  back_to_explorer: 'Takaisin etsintätyökaluun',
  details_title: '{{name}} OAuth-päätepisteet',
  details_description: '{{name}} OAuth-päätepisteet ja liittyvät kehittämisresurssit',
  oidc_details_title: '{{name}} OAuth- ja OIDC-päätepisteet',
  oidc_details_description: '{{name}} OAuth- ja OIDC-päätepisteet ja liittyvät kehittämisresurssit',
  unknown_details_title: 'Tuntematon OAuth-tarjoaja',
  unknown_details_description: 'Tätä OAuth-tarjoajaa ei tunnisteta.',
  documentation_title: '{{name}} OAuth-dokumentaatio ja resurssit',
  oidc_documentation_title: '{{name}} OAuth- ja OIDC-dokumentaatio ja resurssit',
  authorization_endpoint: '{{name}} valtuutuspäätepiste',
  authorization_endpoint_description:
    'Päätepiste, jolle käyttäjät ohjataan myöntämään sovelluksellesi pääsyn heidän tiliinsä.',
  token_endpoint: '{{name}} tunnistepäätepiste',
  token_endpoint_description:
    'Päätepiste, jossa vaihdetaan valtuutuskoodi tai päivitystunniste käyttöoikeustunnisteeksi ja päivitystunnisteeksi.',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    'URI, joka tarjoaa julkiset avaimet JWT-tunnisteiden todentamiseksi. Näitä avaimia käytetään tunnisteiden aitouden vahvistamiseen, ja ne myöntää valtuutuspalvelin.',
  revocation_endpoint: '{{name}} mitätöintipäätepiste',
  revocation_endpoint_description:
    'Päätepiste, jonka avulla voidaan mitätöidä käyttöoikeustunnisteet tai päivitystunnisteet ennen niiden vanhenemista, ja jota käytetään tyypillisesti, kun käyttäjä kirjautuu ulos tai peruuttaa sovelluksen käyttöoikeudet.',
  userinfo_endpoint: '{{name}} käyttäjätiedot-päätepiste',
  userinfo_endpoint_description:
    'Standardoitu OAuth-päätepiste, joka palauttaa todennetun käyttäjän profiilitiedot, mukaan lukien väitteet nykyisen käyttäjän perusteella käyttöoikeustunnisteen laajuuden mukaan.',
  end_session_endpoint: '{{name}} istunnon lopettamispäätepiste',
  end_session_endpoint_description:
    'Päätepiste, jota käytetään käyttäjän istunnon päättämiseen identiteettipalvelussa, ja jota käytetään yleisesti yhden kirjautumisen ulos toiminnon toteuttamiseen.',
  introspection_endpoint: '{{name}} introspektio päätepiste',
  introspection_endpoint_description:
    'Päätepiste, joka sallii valtuutettujen osapuolten tarkistaa käyttöoikeustunnisteen tai päivitystunnisteen tilan ja voimassaolon, ja palauttaa yksityiskohtaiset tunnistemetadata tiedot.',
  oidc_discovery_endpoint: '{{name}} OIDC-löytymispäätepiste',
  oidc_discovery_endpoint_description:
    'Hyvin tunnettu päätepiste (.well-known/openid-configuration), joka tarjoaa OpenID Connect -konfiguraatiometatietoja, mukaan lukien kaikki käytettävissä olevat päätepisteet ja tuetut ominaisuudet.',
  issuer: '{{name}} issuer URL',
  issuer_description:
    'Ainutlaatuinen tunniste-URL, joka tunnistaa OAuth/OIDC-tarjoajan ja jota käytetään tunnisteiden vahvistamiseen',
  provider_not_found: 'Tarjoajaa ei löydy',
  provider_not_found_description:
    'Emme löytäneet etsimääsi OAuth-tarjoajaa. Se on saattanut olla poistettu tai ei ole olemassa.',
};

export default Object.freeze(oauth_providers);
