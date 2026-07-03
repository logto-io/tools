const oauth_providers = {
  title: 'OAuth & OIDC Providers Explorer',
  description:
    'Zoek snel naar OAuth- eindpunten en verwante ontwikkelingsbronnen voor populaire OAuth- & OIDC- providers.',
  hint: 'Alle providerinformatie is afkomstig uit officiële documenten, met links op elke pagina voor referentie',
  app_title: 'OAuth & OIDC Providers <span>Explorer</span>',
  search_placeholder: 'Zoek een provider (bijv. GitHub, Google, Facebook)',
  clear_search: 'Zoekopdracht wissen',
  copy: 'Kopiëren',
  copied: 'Gekopieerd naar klembord',
  back_to_explorer: 'Terug naar Explorer',
  details_title: '{{name}} OAuth- eindpunten',
  details_description: '{{name}} OAuth- eindpunten en verwante ontwikkelingsbronnen',
  oidc_details_title: '{{name}} OAuth- & OIDC- eindpunten',
  oidc_details_description: '{{name}} OAuth- & OIDC- eindpunten en verwante ontwikkelingsbronnen',
  unknown_details_title: 'Onbekende OAuth-provider',
  unknown_details_description: 'Deze OAuth-provider wordt niet herkend.',
  documentation_title: '{{name}} OAuth- documentatie en bronnen',
  oidc_documentation_title: '{{name}} OAuth- & OIDC- documentatie en bronnen',
  authorization_endpoint: '{{name}} autorisatie-eindpunt',
  authorization_endpoint_description:
    'Het eindpunt om gebruikers naar te verwijzen om je applicatie toegang tot hun account te verlenen.',
  token_endpoint: '{{name}} token eindpunt',
  token_endpoint_description:
    'Het eindpunt om de autorisatiecode of de verversingstoken in te wisselen voor een access token en een verversingstoken.',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    'De URI die openbare sleutels biedt voor het verifiëren van JWT-tokens. Deze sleutels worden gebruikt om de authenticiteit van tokens uitgegeven door de autorisatieserver te valideren.',
  revocation_endpoint: '{{name}} intrekkings eindpunt',
  revocation_endpoint_description:
    'Het eindpunt dat wordt gebruikt om access tokens of verversingstokens ongeldig te maken vóór hun verlooptijd, meestal gebruikt wanneer een gebruiker uitlogt of toegang tot een applicatie intrekt.',
  userinfo_endpoint: '{{name}} gebruikersinfo-eindpunt',
  userinfo_endpoint_description:
    'Het gestandaardiseerde OAuth- eindpunt dat geverifieerde gebruikersprofielinformatie retourneert, inclusief claims over de huidige gebruiker op basis van de scope van de access token.',
  end_session_endpoint: '{{name}} eind sessie eindpunt',
  end_session_endpoint_description:
    'Het eindpunt dat wordt gebruikt om de sessie van de gebruiker bij de identiteitsprovider te beëindigen, vaak gebruikt voor het implementeren van single sign-out functionaliteit.',
  introspection_endpoint: '{{name}} introspectie-eindpunt',
  introspection_endpoint_description:
    'Het eindpunt dat geautoriseerde partijen in staat stelt om de status en geldigheid van een access token of verversingstoken te controleren, met gedetailleerde token metadata.',
  oidc_discovery_endpoint: '{{name}} OIDC- ontdekkings eindpunt',
  oidc_discovery_endpoint_description:
    'Het welbekende eindpunt (.well-known/openid-configuration) dat OpenID Connect configuratie-metadata biedt, inclusief alle beschikbare eindpunten en ondersteunde functies.',
  issuer: '{{name}} issuer URL',
  issuer_description:
    'Een unieke identificatie-URL die de OAuth/OIDC-provider identificeert en wordt gebruikt voor de validatie van tokens',
  provider_not_found: 'Provider niet gevonden',
  provider_not_found_description:
    'We konden de OAuth-provider die je zoekt niet vinden. Deze kan zijn verwijderd of bestaat niet.',
};

export default Object.freeze(oauth_providers);
