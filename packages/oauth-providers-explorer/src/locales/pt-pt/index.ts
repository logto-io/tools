const oauth_providers = {
  title: 'Explorador de Fornecedores de OAuth e OIDC',
  description:
    'Consulte rapidamente os endpoints OAuth e os recursos de desenvolvimento relacionados para fornecedores populares de OAuth e OIDC.',
  hint: 'Todas as informações do fornecedor são obtidas dos documentos oficiais, com links em cada página para referência',
  app_title: 'Explorador de Fornecedores de OAuth e OIDC <span>Explorer</span>',
  search_placeholder: 'Procure um fornecedor (por exemplo, GitHub, Google, Facebook)',
  clear_search: 'Limpar pesquisa',
  copy: 'Copiar',
  copied: 'Copiado para a área de transferência',
  back_to_explorer: 'Voltar para o Explorador',
  details_title: 'Endpoints de OAuth do {{name}}',
  details_description: 'Endpoints de OAuth do {{name}} e recursos de desenvolvimento relacionados',
  oidc_details_title: 'Endpoints de OAuth e OIDC do {{name}}',
  oidc_details_description:
    'Endpoints de OAuth e OIDC do {{name}} e recursos de desenvolvimento relacionados',
  unknown_details_title: 'Fornecedor de OAuth desconhecido',
  unknown_details_description: 'Este fornecedor de OAuth não é reconhecido.',
  documentation_title: 'Documentação e recursos de OAuth do {{name}}',
  oidc_documentation_title: 'Documentação e recursos de OAuth e OIDC do {{name}}',
  authorization_endpoint: 'Endpoint de autorização do {{name}}',
  authorization_endpoint_description:
    'O ponto final para redirecionar os utilizadores para conceder ao teu aplicativo acesso à conta deles.',
  token_endpoint: 'Endpoint de token do {{name}}',
  token_endpoint_description:
    'O ponto final para trocar o código de autorização ou token de atualização por um token de acesso e um token de atualização.',
  jwks_uri: 'URI do JWKS do {{name}}',
  jwks_uri_description:
    'O URI que fornece chaves públicas para verificar tokens JWT. Estas chaves são usadas para validar a autenticidade dos tokens emitidos pelo servidor de autorização.',
  revocation_endpoint: 'Endpoint de revogação do {{name}}',
  revocation_endpoint_description:
    'O ponto final usado para invalidar tokens de acesso ou tokens de atualização antes do tempo de expiração deles, normalmente usado quando um usuário sai ou revoga o acesso ao aplicativo.',
  userinfo_endpoint: 'Endpoint de informações do usuário do {{name}}',
  userinfo_endpoint_description:
    'O ponto final OAuth padronizado que retorna informações do perfil de usuário autenticado, incluindo declarações sobre o utilizador atual com base no escopo do token de acesso.',
  end_session_endpoint: 'Endpoint de término de sessão do {{name}}',
  end_session_endpoint_description:
    'O ponto final usado para encerrar a sessão do utilizador no fornecedor de identidade, comumente usado para implementar a funcionalidade de logoff único.',
  introspection_endpoint: 'Endpoint de introspeção do {{name}}',
  introspection_endpoint_description:
    'O ponto final que permite que as partes autorizadas verifiquem o estado e a validade de um token de acesso ou token de atualização, retornando metadados detalhados do token.',
  oidc_discovery_endpoint: 'Endpoint de descoberta OIDC do {{name}}',
  oidc_discovery_endpoint_description:
    'O ponto final bem conhecido (.well-known/openid-configuration) que fornece metadados de configuração do OpenID Connect, incluindo todos os pontos finais disponíveis e recursos suportados.',
  issuer: 'URL do emissor {{name}}',
  issuer_description:
    'Um URL de identificador único que identifica o fornecedor de OAuth/OIDC e é usado para validar tokens',
  provider_not_found: 'Fornecedor não encontrado',
  provider_not_found_description:
    'Não conseguimos encontrar o fornecedor de OAuth que procuras. Pode ter sido removido ou não existir.',
};

export default Object.freeze(oauth_providers);
