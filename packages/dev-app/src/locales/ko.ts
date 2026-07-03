import type en from './en';

const ko = {
  topbar: {
    banner_text: '웹사이트와 동일한 개발 앱에서 공개 도구를 빌드하고 미리보기합니다.',
    banner_link: '도구 인덱스',
    developers: '개발자',
    tools: '도구',
    language: '언어',
    github_star: '스타 9.5k',
    sign_in: '로그인',
    get_started: '시작하기',
  },
  home: {
    label: '개발자 도구',
    title: '공개 도구.',
    description:
      '이 앱은 실제 웹사이트 상단 영역을 반영하여 각 도구를 프로덕션 유사 셸에서 개발 및 검토할 수 있으며, 각 도구는 전용 라우트를 유지합니다.',
    tags: {
      topbar: 'Logto 스타일 탑바',
      routes: '전용 도구 라우트',
      i18n: '공유 i18n 계약',
    },
    planned: '예정',
    coming_next: '다음 예정',
    available_now: '지금 사용 가능',
    open_tool: '도구 열기',
  },
  tools: {
    jwtDecoder: {
      title: 'JWT 디코더',
      description: '웹사이트 정렬 워크스페이스에서 JWT를 디코드, 검사, 편집, 재서명합니다.',
    },
    samlDecoder: {
      title: 'SAML 어설션 디코더',
      description: '다음 계획: 동일한 도구 셸에서 XML 어설션 검사.',
    },
    base64Decoder: {
      title: 'Base64 인코더 및 디코더',
      description: '브라우저에서 Base64와 Base64URL 데이터를 바로 인코딩하고 디코딩하세요.',
    },
    oauthProvidersExplorer: {
      title: 'OAuth 및 OIDC 공급자 탐색기',
      description:
        '인기 있는 OAuth 및 OIDC 공급자의 OAuth 엔드포인트와 관련 개발 리소스를 빠르게 찾아보세요.',
    },
  },
};

export default ko satisfies typeof en;
