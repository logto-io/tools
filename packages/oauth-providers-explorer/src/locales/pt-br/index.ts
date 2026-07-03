const oauth_providers = {
  title: 'Explorador de Provedores OAuth & OIDC',
  description:
    'Procure rapidamente endpoints OAuth e recursos de desenvolvimento relacionados para provedores populares de OAuth & OIDC.',
  hint: 'Todas as informações dos provedores são obtidas de documentos oficiais, com links em cada página para referência',
  app_title: 'Explorador de Provedores OAuth & OIDC <span>Explorer</span>',
  search_placeholder: 'Procure por um provedor (por exemplo, GitHub, Google, Facebook)',
  clear_search: 'Limpar busca',
  copy: 'Copiar',
  copied: 'Copiado para a área de transferência',
  back_to_explorer: 'Voltar ao Explorador',
  details_title: 'Endpoints OAuth de {{name}}',
  details_description: 'Endpoints OAuth de {{name}} e recursos de desenvolvimento relacionados',
  oidc_details_title: 'Endpoints OAuth & OIDC de {{name}}',
  oidc_details_description:
    'Endpoints OAuth & OIDC de {{name}} e recursos de desenvolvimento relacionados',
  unknown_details_title: 'Provedor OAuth desconhecido',
  unknown_details_description: 'Este provedor OAuth não é reconhecido.',
  documentation_title: 'Documentação e recursos OAuth de {{name}}',
  oidc_documentation_title: 'Documentação e recursos OAuth & OIDC de {{name}}',
  authorization_endpoint: 'Endpoint de autorização de {{name}}',
  authorization_endpoint_description:
    'O endpoint para redirecionar os usuários para conceder ao seu aplicativo acesso à conta deles.',
  token_endpoint: 'Endpoint de token de {{name}}',
  token_endpoint_description:
    'O endpoint para trocar o código de autorização ou token de atualização por um token de acesso e um token de atualização.',
  jwks_uri: 'URI JWKS de {{name}}',
  jwks_uri_description:
    'A URI que fornece chaves públicas para verificar tokens JWT. Essas chaves são usadas para validar a autenticidade dos tokens emitidos pelo servidor de autorização.',
  revocation_endpoint: 'Endpoint de revogação de {{name}}',
  revocation_endpoint_description:
    'O endpoint usado para invalidar tokens de acesso ou tokens de atualização antes do tempo de expiração deles, normalmente usado quando um usuário faz logout ou revoga o acesso do aplicativo.',
  userinfo_endpoint: 'Endpoint de informações do usuário de {{name}}',
  userinfo_endpoint_description:
    'O endpoint padronizado do OAuth que retorna informações de perfil do usuário autenticado, incluindo reivindicações sobre o usuário atual com base no escopo do token de acesso.',
  end_session_endpoint: 'Endpoint de encerramento de sessão de {{name}}',
  end_session_endpoint_description:
    'O endpoint usado para encerrar a sessão do usuário no provedor de identidade, comumente usado para implementar a funcionalidade de logout único.',
  introspection_endpoint: 'Endpoint de introspecção de {{name}}',
  introspection_endpoint_description:
    'O endpoint que permite que partes autorizadas verifiquem o estado e a validade de um token de acesso ou token de atualização, retornando metadados detalhados do token.',
  oidc_discovery_endpoint: 'Endpoint de descoberta OIDC de {{name}}',
  oidc_discovery_endpoint_description:
    'O endpoint bem conhecido (.well-known/openid-configuration) que fornece metadados de configuração OpenID Connect, incluindo todos os endpoints disponíveis e recursos suportados.',
  issuer: 'URL do issuer de {{name}}',
  issuer_description:
    'Uma URL identificadora única que identifica o provedor OAuth/OIDC e é usada para validar tokens',
  provider_not_found: 'Provedor não encontrado',
  provider_not_found_description:
    'Não conseguimos encontrar o provedor OAuth que você está procurando. Pode ter sido removido ou não existir.',
};

export default Object.freeze(oauth_providers);
