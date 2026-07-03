const oauth_providers = {
  title: 'OAuth- och OIDC-leverantörsutforskare',
  description:
    'Hitta snabbt OAuth-slutpunkter och relaterade utvecklingsresurser för populära OAuth- och OIDC-leverantörer.',
  hint: 'All leverantörsinformation hämtas från officiella dokument, med länkar på varje sida för referens',
  app_title: 'OAuth- och OIDC-leverantörs <span>utforskare</span>',
  search_placeholder: 'Sök efter en leverantör (t.ex. GitHub, Google, Facebook)',
  back_to_explorer: 'Tillbaka till Utforskaren',
  details_title: '{{name}} OAuth-slutpunkter',
  details_description: '{{name}} OAuth-slutpunkter och relaterade utvecklingsresurser',
  oidc_details_title: '{{name}} OAuth- och OIDC-slutpunkter',
  oidc_details_description:
    '{{name}} OAuth- och OIDC-slutpunkter och relaterade utvecklingsresurser',
  unknown_details_title: 'Okänd OAuth-leverantör',
  unknown_details_description: 'Denna OAuth-leverantör känns inte igen.',
  documentation_title: '{{name}} OAuth-dokumentation och resurser',
  oidc_documentation_title: '{{name}} OAuth- och OIDC-dokumentation och resurser',
  authorization_endpoint: '{{name}} auktoriseringsslutpunkt',
  authorization_endpoint_description:
    'Slutpunkten för att omdirigera användare till för att ge ditt program åtkomst till deras konto.',
  token_endpoint: '{{name}} token-slutpunkt',
  token_endpoint_description:
    'Slutpunkten för att byta auktoriseringskod eller förnya token mot en åtkomsttoken och en förnyelsetoken.',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    'URI som tillhandahåller offentliga nycklar för att verifiera JWT-tokens. Dessa nycklar används för att validera äktheten av tokens utfärdade av auktoriseringsservern.',
  revocation_endpoint: '{{name}} återkallandeslutpunkt',
  revocation_endpoint_description:
    'Slutpunkten som används för att ogiltigförklara åtkomsttoken eller förnyelsetoken före deras utgångstid, används vanligtvis när en användare loggar ut eller återkallar programåtkomst.',
  userinfo_endpoint: '{{name}} användarinformationsslutpunkt',
  userinfo_endpoint_description:
    'Den standardiserade OAuth-slutpunkten som returnerar autentiserad användarprofilinformation, inklusive påståenden om den aktuella användaren baserat på åtkomsttokenens omfattning.',
  end_session_endpoint: '{{name}} avslutningssessionsslutpunkt',
  end_session_endpoint_description:
    'Slutpunkten som används för att avsluta användarens session vid identitetsleverantören, vanligt för att implementera enstaka utloggningsfunktionalitet.',
  introspection_endpoint: '{{name}} introspektionsslutpunkt',
  introspection_endpoint_description:
    'Slutpunkten som tillåter auktoriserade parter att kontrollera statusen och giltigheten för en åtkomsttoken eller förnyelsetoken, och returnera detaljerad tokenmetadata.',
  oidc_discovery_endpoint: '{{name}} OIDC upptäcktslutpunkt',
  oidc_discovery_endpoint_description:
    'Den allmänt kända slutpunkten (.well-known/openid-configuration) som tillhandahåller OpenID Connect-konfigurationsmetadata, inklusive alla tillgängliga slutpunkter och stödda funktioner.',
  issuer: '{{name}} issuer URL',
  issuer_description:
    'En unik identifierar-URL som identifierar OAuth/OIDC-leverantören och används för att validera tokens.',
  provider_not_found: 'Leverantör saknas',
  provider_not_found_description:
    'Vi kunde inte hitta den OAuth-leverantör du letar efter. Den kan ha tagits bort eller existerar inte.',
};

export default Object.freeze(oauth_providers);
