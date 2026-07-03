const oauth_providers = {
  title: 'OAuth & OIDC Providers Explorer',
  description:
    'Quickly look up OAuth endpoints and related development resources for popular OAuth & OIDC providers.',
  hint: 'All provider info is sourced from official docs, with links on each page for reference',
  app_title: 'OAuth & OIDC Providers <span>Explorer</span>',
  search_placeholder: 'Search for a provider (e.g., GitHub, Google, Facebook)',
  clear_search: 'Clear search',
  copy: 'Copy',
  copied: 'Copied to clipboard',
  back_to_explorer: 'Back to Explorer',
  details_title: '{{name}} OAuth endpoints',
  details_description: '{{name}} OAuth endpoints and related development resources',
  oidc_details_title: '{{name}} OAuth & OIDC endpoints',
  oidc_details_description: '{{name}} OAuth & OIDC endpoints and related development resources',
  unknown_details_title: 'Unknown OAuth provider',
  unknown_details_description: 'This OAuth provider is not recognized.',
  documentation_title: '{{name}} OAuth documentation and resources',
  oidc_documentation_title: '{{name}} OAuth & OIDC documentation and resources',
  authorization_endpoint: '{{name}} authorization endpoint',
  authorization_endpoint_description:
    'The endpoint to redirect users to in order to grant your application access to their account.',
  token_endpoint: '{{name}} token endpoint',
  token_endpoint_description:
    'The endpoint to exchange the authorization code or refresh token for an access token and a refresh token.',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    'The URI that provides public keys for verifying JWT tokens. These keys are used to validate the authenticity of tokens issued by the authorization server.',
  revocation_endpoint: '{{name}} revocation endpoint',
  revocation_endpoint_description:
    'The endpoint used to invalidate access tokens or refresh tokens before their expiration time, typically used when a user logs out or revokes application access.',
  userinfo_endpoint: '{{name}} userinfo endpoint',
  userinfo_endpoint_description:
    'The standardized OAuth endpoint that returns authenticated user profile information, including claims about the current user based on the scope of access token.',
  end_session_endpoint: '{{name}} end session endpoint',
  end_session_endpoint_description:
    "The endpoint used to terminate the user's session at the identity provider, commonly used for implementing single sign-out functionality.",
  introspection_endpoint: '{{name}} introspection endpoint',
  introspection_endpoint_description:
    'The endpoint that allows authorized parties to check the state and validity of an access token or refresh token, returning detailed token metadata.',
  oidc_discovery_endpoint: '{{name}} OIDC discovery endpoint',
  oidc_discovery_endpoint_description:
    'The well-known endpoint (.well-known/openid-configuration) that provides OpenID Connect configuration metadata, including all available endpoints and supported features.',
  issuer: '{{name}} issuer URL',
  issuer_description:
    'A unique identifier URL that identifies the OAuth/OIDC provider and is used to validate tokens',
  provider_not_found: 'Provider not found',
  provider_not_found_description:
    "We couldn't find the OAuth provider you're looking for. It may have been removed or doesn't exist.",
};

export default Object.freeze(oauth_providers);
