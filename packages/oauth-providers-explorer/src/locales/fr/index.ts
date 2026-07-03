const oauth_providers = {
  title: 'Exploreur de fournisseurs OAuth & OIDC',
  description:
    'Consultez rapidement les points de terminaison OAuth et les ressources de développement associées pour les fournisseurs populaires OAuth & OIDC.',
  hint: 'Toutes les informations sur les fournisseurs proviennent de la documentation officielle, avec des liens sur chaque page pour référence',
  app_title: 'Exploreur de fournisseurs <span>OAuth & OIDC</span>',
  search_placeholder: 'Recherchez un fournisseur (par exemple, GitHub, Google, Facebook)',
  clear_search: 'Effacer la recherche',
  copy: 'Copier',
  copied: 'Copié dans le presse-papiers',
  back_to_explorer: "Retour à l'explorateur",
  details_title: 'Points de terminaison OAuth de {{name}}',
  details_description:
    'Points de terminaison OAuth de {{name}} et ressources de développement associées',
  oidc_details_title: 'Points de terminaison OAuth & OIDC de {{name}}',
  oidc_details_description:
    'Points de terminaison OAuth & OIDC de {{name}} et ressources de développement associées',
  unknown_details_title: 'Fournisseur OAuth inconnu',
  unknown_details_description: "Ce fournisseur OAuth n'est pas reconnu.",
  documentation_title: 'Documentation et ressources OAuth de {{name}}',
  oidc_documentation_title: 'Documentation et ressources OAuth & OIDC de {{name}}',
  authorization_endpoint: "Point de terminaison d'autorisation de {{name}}",
  authorization_endpoint_description:
    "Le point de terminaison vers lequel rediriger les utilisateurs pour permettre à votre application d'accéder à leur compte.",
  token_endpoint: 'Point de terminaison de jeton de {{name}}',
  token_endpoint_description:
    "Le point de terminaison pour échanger le code d'autorisation ou le jeton d'actualisation contre un jeton d'accès et un jeton d'actualisation.",
  jwks_uri: 'URI JWKS de {{name}}',
  jwks_uri_description:
    "L'URI qui fournit les clés publiques pour vérifier les jetons JWT. Ces clés sont utilisées pour valider l'authenticité des jetons émis par le serveur d'autorisation.",
  revocation_endpoint: 'Point de terminaison de révocation de {{name}}',
  revocation_endpoint_description:
    "Le point de terminaison utilisé pour invalider les jetons d'accès ou les jetons d'actualisation avant leur expiration, généralement utilisé lorsque l'utilisateur se déconnecte ou révoque l'accès à l'application.",
  userinfo_endpoint: 'Point de terminaison userinfo de {{name}}',
  userinfo_endpoint_description:
    "Le point de terminaison OAuth standardisé qui renvoie des informations de profil utilisateur authentifié, y compris des assertions concernant l'utilisateur actuel en fonction de la portée du jeton d'accès.",
  end_session_endpoint: 'Point de terminaison de fin de session de {{name}}',
  end_session_endpoint_description:
    "Le point de terminaison utilisé pour clôturer la session de l'utilisateur auprès du fournisseur d'identité, couramment utilisé pour implémenter la fonctionnalité de déconnexion unique.",
  introspection_endpoint: "Point de terminaison d'introspection de {{name}}",
  introspection_endpoint_description:
    "Le point de terminaison qui permet aux parties autorisées de vérifier l'état et la validité d'un jeton d'accès ou de rafraîchissement, en retournant des métadonnées détaillées sur le jeton.",
  oidc_discovery_endpoint: 'Point de terminaison de découverte OIDC de {{name}}',
  oidc_discovery_endpoint_description:
    'Le point de terminaison bien connu (.well-known/openid-configuration) qui fournit les métadonnées de configuration OpenID Connect, y compris tous les points de terminaison disponibles et les fonctionnalités supportées.',
  issuer: "URL de l'émetteur de {{name}}",
  issuer_description:
    'Une URL identifiant unique qui identifie le fournisseur OAuth/OIDC et est utilisée pour valider les jetons',
  provider_not_found: 'Fournisseur non trouvé',
  provider_not_found_description:
    "Nous n'avons pas pu trouver le fournisseur OAuth que vous recherchez. Il a peut-être été supprimé ou n'existe pas.",
};

export default Object.freeze(oauth_providers);
