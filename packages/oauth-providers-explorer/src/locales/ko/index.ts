const oauth_providers = {
  title: 'OAuth 및 OIDC 공급자 탐색기',
  description:
    '인기 있는 OAuth 및 OIDC 공급자의 OAuth 엔드포인트와 관련 개발 리소스를 빠르게 찾아보세요.',
  hint: '모든 공급자 정보는 공식 문서에서 가져오며, 각 페이지에 참조 링크가 있습니다.',
  app_title: 'OAuth 및 OIDC 공급자 <span>탐색기</span>',
  search_placeholder: '공급자 검색 (예: GitHub, Google, Facebook)',
  back_to_explorer: '탐색기로 돌아가기',
  details_title: '{{name}} OAuth 엔드포인트',
  details_description: '{{name}} OAuth 엔드포인트 및 관련 개발 리소스',
  oidc_details_title: '{{name}} OAuth 및 OIDC 엔드포인트',
  oidc_details_description: '{{name}} OAuth 및 OIDC 엔드포인트 및 관련 개발 리소스',
  unknown_details_title: '알 수 없는 OAuth 공급자',
  unknown_details_description: '이 OAuth 공급자는 인식되지 않습니다.',
  documentation_title: '{{name}} OAuth 문서 및 리소스',
  oidc_documentation_title: '{{name}} OAuth 및 OIDC 문서 및 리소스',
  authorization_endpoint: '{{name}} 인증 엔드포인트',
  authorization_endpoint_description:
    '사용자를 리디렉션하여 애플리케이션이 계정에 대한 접근 권한을 부여받을 수 있는 엔드포인트입니다.',
  token_endpoint: '{{name}} 토큰 엔드포인트',
  token_endpoint_description:
    '인증 코드 또는 갱신 토큰을 액세스 토큰 및 갱신 토큰으로 교환하는 엔드포인트입니다.',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    'JWT 토큰을 검증하기 위한 공개 키를 제공하는 URI입니다. 이 키들은 권한 부여 서버가 발급한 토큰의 유효성을 검증하는 데 사용됩니다.',
  revocation_endpoint: '{{name}} 토큰 폐기 엔드포인트',
  revocation_endpoint_description:
    '접속 토큰이나 갱신 토큰의 만료 시간 전에 무효화하는 데 사용되는 엔드포인트로, 주로 사용자가 로그아웃할 때나 애플리케이션 접근을 철회할 때 사용됩니다.',
  userinfo_endpoint: '{{name}} 사용자 정보 엔드포인트',
  userinfo_endpoint_description:
    '표준화된 OAuth 엔드포인트로, 액세스 토큰의 범위에 따라 현재 사용자에 대한 클레임을 포함한 인증된 사용자 프로필 정보를 반환합니다.',
  end_session_endpoint: '{{name}} 세션 종료 엔드포인트',
  end_session_endpoint_description:
    '사용자의 세션을 ID 공급자에서 종료하는 데 사용되는 엔드포인트로, 일반적으로 단일 로그아웃 기능 구현 시 사용됩니다.',
  introspection_endpoint: '{{name}} 토큰 조회 엔드포인트',
  introspection_endpoint_description:
    '인증된 당사자가 액세스 토큰 또는 갱신 토큰의 상태와 유효성을 확인하고 자세한 토큰 메타데이터를 반환할 수 있게 하는 엔드포인트입니다.',
  oidc_discovery_endpoint: '{{name}} OIDC 검색 엔드포인트',
  oidc_discovery_endpoint_description:
    '잘 알려진 엔드포인트 (.well-known/openid-configuration)로, 사용 가능한 모든 엔드포인트와 지원되는 기능을 포함한 OpenID Connect 구성 메타데이터를 제공합니다.',
  issuer: '{{name}} 발급자 URL',
  issuer_description:
    'OAuth/OIDC 공급자를 식별하고 토큰을 검증하는 데 사용되는 고유 식별자 URL입니다.',
  provider_not_found: '공급자를 찾을 수 없습니다',
  provider_not_found_description:
    '찾고 있는 OAuth 공급자를 찾을 수 없습니다. 삭제되었거나 존재하지 않을 수 있습니다.',
};

export default Object.freeze(oauth_providers);
