const oauth_providers = {
  title: 'Esploratore dei provider OAuth & OIDC',
  description:
    'Trova rapidamente gli endpoint OAuth e le risorse di sviluppo correlate per i provider OAuth & OIDC più popolari.',
  hint: 'Tutte le informazioni sui provider provengono dai documenti ufficiali, con collegamenti su ciascuna pagina per riferimento',
  app_title: 'Provider OAuth & OIDC <span>Esploratore</span>',
  search_placeholder: 'Cerca un provider (ad es., GitHub, Google, Facebook)',
  clear_search: 'Cancella ricerca',
  copy: 'Copia',
  copied: 'Copiato negli appunti',
  back_to_explorer: "Torna all'esploratore",
  details_title: 'Endpoint OAuth di {{name}}',
  details_description: 'Endpoint OAuth di {{name}} e risorse di sviluppo correlate',
  oidc_details_title: 'Endpoint OAuth & OIDC di {{name}}',
  oidc_details_description: 'Endpoint OAuth & OIDC di {{name}} e risorse di sviluppo correlate',
  unknown_details_title: 'Provider OAuth sconosciuto',
  unknown_details_description: 'Questo provider OAuth non è riconosciuto.',
  documentation_title: 'Documentazione e risorse OAuth di {{name}}',
  oidc_documentation_title: 'Documentazione e risorse OAuth & OIDC di {{name}}',
  authorization_endpoint: 'Endpoint di autorizzazione di {{name}}',
  authorization_endpoint_description:
    "L'endpoint a cui reindirizzare gli utenti per concedere accesso all'applicazione al loro account.",
  token_endpoint: 'Endpoint token di {{name}}',
  token_endpoint_description:
    "L'endpoint per scambiare il codice di autorizzazione o il refresh token per un token di accesso e un refresh token.",
  jwks_uri: 'URI JWKS di {{name}}',
  jwks_uri_description:
    "L'URI che fornisce le chiavi pubbliche per la verifica dei token JWT. Queste chiavi vengono utilizzate per convalidare l'autenticità dei token emessi dal server di autorizzazione.",
  revocation_endpoint: 'Endpoint di revoca di {{name}}',
  revocation_endpoint_description:
    "L'endpoint utilizzato per invalidare i token di accesso o i refresh token prima della loro scadenza, normalmente usato quando un utente esce o revoca l'accesso a un'applicazione.",
  userinfo_endpoint: 'Endpoint delle informazioni utente di {{name}}',
  userinfo_endpoint_description:
    "L'endpoint standardizzato OAuth che restituisce informazioni sul profilo utente autenticato, comprese le attestazioni sull'utente corrente basate sull'ambito del token di accesso.",
  end_session_endpoint: 'Endpoint di terminazione sessione di {{name}}',
  end_session_endpoint_description:
    "L'endpoint utilizzato per terminare la sessione dell'utente presso il fornitore di identità, comunemente utilizzato per implementare la funzionalità di logout singolo.",
  introspection_endpoint: 'Endpoint di introspezione di {{name}}',
  introspection_endpoint_description:
    "L'endpoint che consente alle parti autorizzate di verificare lo stato e la validità di un token di accesso o di un refresh token, restituendo metadati dettagliati del token.",
  oidc_discovery_endpoint: 'Endpoint di discovery OIDC di {{name}}',
  oidc_discovery_endpoint_description:
    "L'endpoint comune (.well-known/openid-configuration) che fornisce metadati di configurazione OpenID Connect, inclusi tutti gli endpoint disponibili e le funzionalità supportate.",
  issuer: "URL dell'issuer di {{name}}",
  issuer_description:
    'Un URL identificativo unico che identifica il provider OAuth/OIDC e viene usato per convalidare i token',
  provider_not_found: 'Provider non trovato',
  provider_not_found_description:
    'Non siamo riusciti a trovare il provider OAuth che stai cercando. Potrebbe essere stato rimosso o non esistere.',
};

export default Object.freeze(oauth_providers);
