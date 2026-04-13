import type en from '../en';

const jwt_decoder = {
  title: 'JWT 디코더 & 인코더 (JWT decoder & encoder) | 안전하고, 간단하며, 사용자 친화적',
  description:
    'JWT 를 신속하게 온라인으로 디코드하고 인코드하며, 그들의 서명을 검증하세요. 다양한 알고리즘을 사용한 JWT 예제와 단계별 JWT 구현 가이드를 탐색해보세요.',
  encoder: '인코더',
  decoder: '디코더',
  subtitle:
    '당신의 데이터는 100% 비공개입니다 -- JWT는 귀하의 장치에서 직접 완전히 디코딩 및 인코딩됩니다.',
  jwt_label: 'JWT',
  encoded_jwt_label: '인코딩된 JWT',
  decoded_header_label: '디코딩된 헤더',
  header_label: '헤더',
  decoded_payload_label: '디코딩된 페이로드',
  payload_label: '페이로드',
  signature_verified: '서명 확인됨!',
  invalid_signature: '잘못된 서명!',
  jwt_editor_placeholder: '여기에 JWT를 붙여넣으세요',
  hmac_secret_placeholder: 'HMAC 비밀 키를 입력하세요',
  public_key_placeholder: '공개 키를 여기에 입력하세요',
  private_key_placeholder: '개인 키를 여기에 입력하세요',
  jwks_endpoint_uri_placeholder: 'JWKs 엔드포인트 URL을 입력하세요',
  hmac_secret_label: '서명 키',
  jwks_endpoint_uri_label: 'JWKs 엔드포인트 URI',
  public_key_label: '공개 키',
  private_key_label: '개인 키',
  base64_encoded_label: 'Base64 인코딩됨',
  jwks_endpoint_uri_link: 'JWKs 엔드포인트 URI',
  public_key_link: '공개 키로 확인',
  jwt_examples: 'JWT 예제',
  share_jwt: 'JWT 공유',
  copy_to_clipboard: 'URL이 클립보드에 복사되었습니다',
  instruction: {
    title: 'JWT에 대해 배우기',
    subtitle:
      '당신이 JWT에 대해 걱정하는 모든 정보와 다양한 프레임워크에서 JWT를 확인하는 단계별 가이드는 있습니다.',
    what_is_jwt: {
      title: 'JWT란 무엇인가?',
      description:
        'JWT (JSON Web Token)는 정보를 구조적이고 읽기 쉬운 형식으로 전달하는 독립적이며 상태 비유지적인 토큰입니다. 당신이 API를 보호하거나 애플리케이션에 토큰 기반 인증을 채택하든, JWT는 아래와 같은 이유로 강력한 도구입니다:',
      bullets: [
        {
          label: '상태 비유지적',
          description:
            'JWT는 자급자족형이며 서버 측 상태가 확인되지 않아도 됩니다. JWT는 서명을 통해 데이터의 무결성을 보장할 수 있습니다.',
        },
        {
          label: '서비스 간 호환성',
          description: 'JWT는 서로 다른 서비스 간에 쉽고 쉽게 공유되고 확인될 수 있습니다.',
        },
        {
          label: '확장 가능',
          description:
            'JWT의 페이로드는 사용자 정의 주장을 포함할 수 있으므로 유연한 권한 부여 및 정보 공유가 가능합니다.',
        },
      ],
    },
    jwt_structure: {
      title: 'JWT의 구조',
      description:
        '전형적인 JWT는 세 부분으로 나뉘며, 각각 Base64URL로 인코딩되고 점(.)으로 분리됩니다:',
      bullets: [
        {
          label: '헤더',
          description:
            '메타데이터를 포함하여, 서명 알고리듬(예: HS256 또는 RS256)과 토큰의 유형(JWT)을 포함합니다.',
        },
        {
          label: '페이로드',
          description:
            '사용자 ID, 사용자 프로필, 만료 시간 또는 범위와 같은 실제 데이터를 포함합니다.',
        },
        {
          label: '서명',
          description:
            '헤더, 페이로드의 조합을 해싱하고 비밀 키를 사용하여 보안했습니다. 그것의 목적은 토큰의 무결성을 보장하고 변경되지 않았음을 확인하는 것입니다',
        },
      ],
      summary: '이 구조는 JWT가 당사자 간에 정보를 전달하는 간결하고 안전한 방법을 제공합니다.',
    },
    token_claims: {
      title: 'JWT의 일반적인 토큰 주장',
      description:
        '이러한 주장은 페이로드의 일부이며 주요 정보를 보유합니다. 다음은 참조할 표준화된 등록 클레임입니다:',
      table: {
        headers: ['클레임', '전체 이름', '설명'],
        rows: [
          {
            claim: 'iss',
            full_name: '발행자',
            description: 'JWT를 발급한 엔티티, 예: 인증 서버.',
          },
          {
            claim: 'sub',
            full_name: '주제',
            description: 'JWT의 주제를 식별하며, 일반적으로 인증된 사용자를 나타냅니다.',
          },
          {
            claim: 'aud',
            full_name: '청중',
            description:
              '토큰을 수신하고 처리할 수 있는 수신자를 지정합니다. 여러 청중에 대한 배열 값으로 사용될 수 있으며, 하나의 수신자에 대해 단일 값이 될 수 있습니다.',
          },
          {
            claim: 'exp',
            full_name: '만료 시간',
            description:
              '토큰 만료 시간을 설정하여 만료 후 무효화됩니다. 이는 토큰이 유효한 시간을 제한하여 재생 공격을 방지하는 데 도움이 됩니다.',
          },
          {
            claim: 'nbf',
            full_name: '유효 전',
            description:
              '이 타임스탬프 이후에만 토큰이 유효합니다. 시계에 접근할 수 없는 상황에서 유용합니다.',
          },
          {
            claim: 'iat',
            full_name: '발행 시간',
            description: '토큰이 생성된 시간입니다. 토큰의 나이를 결정하는 데 사용될 수 있습니다.',
          },
          {
            claim: 'jti',
            full_name: 'JWT ID',
            description:
              '토큰에 대한 고유 식별자로, 동일한 토큰이 여러 번 사용되는 것(e.g., 재생 공격)을 방지하는 데 유용합니다.',
          },
        ],
      },
      other_token_claims: {
        description:
          '규격 및 인증 서버의 구성에 따라 특정 사례 지원을 위해 페이로드에 추가 주장이 포함될 수 있습니다. 또한, 특정 비즈니스 요구를 충족하기 위해 JWT에 사용자 정의 주장을 추가할 수 있습니다.',
        id_token: {
          title: 'ID 토큰',
          description:
            'OpenID Connect에서 사용되며, 인증된 사용자에 대한 프로필 정보(예: 이름, 이메일 등)를 포함합니다.',
        },
        access_token: {
          title: '액세스 토큰',
          description:
            'OAuth 2.0에서 사용되며, 사용자 또는 애플리케이션을 대신하여 특정 리소스 또는 API에 대한 액세스를 부여합니다.',
        },
      },
      notification: {
        label: '주의',
        description:
          'JWT 주장에 비공개 또는 민감한 정보를 저장하지 마세요. JWT 주장은 인코딩(Base64URL 사용)되지만 암호화되지 않습니다. 즉, 토큰을 가진 누구든지 실제로 주장을 변경하지는 않을 수 있지만 그것을 디코딩하고 내용을 볼 수 있습니다. 필요한 경우 민감한 데이터를 보호하기 위해 암호화 또는 다른 보안 방법을 사용하세요.',
      },
    },
    when_to_use: {
      title: 'JWT를 사용할 때는 언제인가요?',
      description: 'JWT는 아래 시나리오에서 특히 유익할 수 있습니다:',
      bullets: [
        {
          label: '마이크로서비스 아키텍처',
          description: '여러 서비스 간의 상태 비유지 인증을 위한 것입니다.',
        },
        {
          label: '단일 사인온 (SSO) 시스템',
          description: '하나의 인증으로 여러 애플리케이션에 대한 액세스를 활성화합니다.',
        },
        {
          label: '모바일 애플리케이션',
          description: 'API 호출 간 사용자의 세션을 효율적으로 유지합니다.',
        },
        {
          label: '트래픽이 많은 애플리케이션',
          description: '고부하 환경에서 데이터베이스 부하를 줄이기 위해.',
        },
        {
          label: '교차 출처 리소스 공유 (CORS)',
          description: '여러 도메인 간 인증을 단순화합니다.',
        },
        {
          label: '서버리스 아키텍처',
          description: '서버 측 세션이 어려운 곳에서 상태 비유지 인증을 제공합니다.',
        },
      ],
    },
    learn_more: '더 알아보기',
  },
  verify_jwt: {
    title: 'JWT를 어떻게 확인하나요?',
    subtitle:
      'JWT의 무결성을 확인하여 헤더와 페이로드가 조작되지 않았는지 확인해야 합니다. 아래는 인기 있는 프로그래밍 환경에서 JWT를 확인하는 단계별 예제입니다:',
    ruby_label: '루비에서 JWT 확인',
    dotnet_label: '.NET 에서 JWT 확인',
    java_label: '자바에서 JWT 확인',
    php_label: 'PHP 에서 JWT 확인',
    python_label: '파이썬에서 JWT 확인',
    go_label: 'Go 에서 JWT 확인',
    nodejs_label: 'Node.js 에서 JWT 확인',
    rust_label: '러스트에서 JWT 확인',
  },
  related_topics: {
    title: '관련 JWT 주제',
    subtitle:
      '당신이 JWT에 대해 걱정하는 모든 정보와 다양한 프레임워크에서 JWT를 확인하는 단계별 가이드는 있습니다.',
    blogs: {
      jwt_algorithm: {
        title: 'JWT 알고리즘: EC vs. RSA',
        description:
          'EC와 RSA와 같은 JWT의 서명 알고리즘을 탐구하고 귀하의 애플리케이션에 가장 안전하고 효율적인 방법을 선택하는 방법을 알아보세요.',
      },
      id_token_and_access_token: {
        title: 'ID 토큰 & 액세스 토큰 & 리프레시 토큰',
        description:
          'ID 토큰, 액세스 토큰 및 리프레시 토큰의 구체적인 목적을 알고 계십니까? JWT 관점에서의 인증 및 권한 부여 과정에서의 역할을 이해하세요.',
      },
      custom_jwt_token_claims: {
        title: '사용자 정의 JWT 토큰 주장',
        description:
          'JWT는 어떻게 세밀한 액세스 제어를 달성합니까? RBAC (역할 기반 접근 제어)와 ABAC (속성 기반 접근 제어)를 비교하여 귀하의 애플리케이션에 가장 적합한 솔루션을 찾으세요.',
      },
      opaque_token_vs_jwt: {
        title: '투명 토큰 vs. JWT 토큰',
        description:
          'JWT와 투명 토큰 간의 핵심 차이점을 탐색하고 고성능 및 확장성 덕분에 JWT가 어떻게 인증의 현대적 선택이 되는지를 알아보세요.',
      },
      api_authorization: {
        title: 'API 권한 부여: API 키 vs. 기본 인증 vs. OAuth JWT 토큰',
        description:
          '장단점과 함께 세 가지 일반적인 API 권한 부여 메커니즘을 탐구하세요. OAuth JWT 토큰을 사용하여 API를 보호하는 베스트 프랙티스를 깊이 있게 알아보세요.',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. 세션 인증',
        description:
          '세션 기반 인증은 사용자 세션을 유지하기 위해 서버 측 저장소에 의존하는 반면 토큰 기반 인증은 클라이언트와 서버 간에 상태 비유지적이며 확장 가능한 통신을 가능하게 합니다. JWT가 API 보안을 혁신하고 있는 방법과 왜 현대적 인증의 기본 선택이 되고 있는지를 발견하세요.',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'OAuth, OpenID Connect (OIDC), SAML, SSO 및 JWT와 같은 화려한 용어는 신원 및 접근 관리(IAM)의 분야에서 자주 사용되지만 그 의미는 무엇입니까? 그들은 어떻게 협력합니까?',
      },
    },
  },
  unblock_more_subtitle:
    'Logto Cloud로 워크플로우를 단순화하고 사용자 관리를 안정적으로 보장하세요. OpenID Connect (OIDC)를 기반으로 하여, 필요에 따라 확장할 수 있도록 설계된 신뢰할 수 있는 인증 및 권한 부여 시스템을 제공하기 위해 JWT를 활용합니다.',
};

export default Object.freeze(jwt_decoder) satisfies typeof en;
