import type en from '../en';

const jwt_decoder = {
  title: 'JWT 解碼器與編碼器 (JWT decoder & encoder) | 安全、簡單且使用者友好',
  description:
    '快速在線解碼和編碼 JWT，並驗證其簽名。使用不同的算法探索 JWT 示例，並提供逐步的 JWT 實現指南。',
  encoder: '編碼器',
  decoder: '解碼器',
  subtitle: '你的數據是 100% 私密的 —— JWT 完全在你的設備上進行解碼和編碼。',
  jwt_label: 'JWT',
  encoded_jwt_label: '已編碼 JWT',
  decoded_header_label: '已解碼標頭',
  header_label: '標頭',
  decoded_payload_label: '已解碼有效載荷',
  payload_label: '有效載荷',
  signature_verified: '簽名驗證成功！',
  invalid_signature: '簽名無效！',
  jwt_editor_placeholder: '在此貼上你的 JWT',
  hmac_secret_placeholder: '輸入 HMAC 密鑰',
  public_key_placeholder: '在此輸入公鑰',
  private_key_placeholder: '在此輸入私鑰',
  jwks_endpoint_uri_placeholder: '輸入 JWKs 端點 URL',
  hmac_secret_label: '簽名密鑰',
  jwks_endpoint_uri_label: 'JWKs 端點 URI',
  public_key_label: '公鑰',
  private_key_label: '私鑰',
  base64_encoded_label: 'Base64 編碼',
  jwks_endpoint_uri_link: 'JWKs 端點 URI',
  public_key_link: '通過公鑰驗證',
  jwt_examples: 'JWT 示例',
  share_jwt: '分享 JWT',
  copy_to_clipboard: 'URL 已複製到剪貼簿',
  instruction: {
    title: '了解 JWT',
    subtitle: '關於 JWT 的所有信息以及在不同框架中驗證 JWT 的逐步指南。',
    what_is_jwt: {
      title: '什麼是 JWT？',
      description:
        'JWT（JSON Web Token）是一種自我包含的無狀態令牌，以結構化且可讀的格式攜帶信息。無論你是在保護 API 還是採用應用程序的基於令牌的身份驗證，JWT 都是一個強大的工具，因為它們：',
      bullets: [
        {
          label: '無狀態',
          description: 'JWT 是自包含的，無需服務器端狀態驗證。JWT 可以通過簽名確保數據的完整性。',
        },
        {
          label: '跨服務兼容性',
          description: 'JWT 可以輕鬆在不同的服務間共享和驗證。',
        },
        {
          label: '可擴展',
          description: 'JWT 的有效載荷可以包含自定義的聲明，允許靈活的授權和信息共享。',
        },
      ],
    },
    jwt_structure: {
      title: 'JWT 的結構',
      description: '一個典型的 JWT 被分為三部分，每部分用 Base64URL 編碼並由句號（.）分隔：',
      bullets: [
        {
          label: '標頭',
          description: '包含元數據，如簽名算法（例如，HS256 或 RS256）和令牌的類型（JWT）。',
        },
        {
          label: '有效載荷',
          description: '包含實際數據，如用戶 ID、用戶配置文件、過期時間或範圍。',
        },
        {
          label: '簽名',
          description:
            '標頭、有效載荷的哈希組合並使用密鑰加密。其目的是確保令牌的完整性並確認它未被篡改。',
        },
      ],
      summary: '此結構使 JWT 能夠在各方之間提供一種緊湊且安全的信息傳輸方式。',
    },
    token_claims: {
      title: 'JWT 中常見的令牌聲明',
      description: '聲明是有效載荷的一部分，並持有關鍵信息。以下是你的參考標準化註冊聲明：',
      table: {
        headers: ['聲明', '全名', '描述'],
        rows: [
          {
            claim: 'iss',
            full_name: '發行者',
            description: '發行 JWT 的實體，如授權服務器。',
          },
          {
            claim: 'sub',
            full_name: '主體',
            description: '標識 JWT 的主體，通常代表經過身份驗證的用戶。',
          },
          {
            claim: 'aud',
            full_name: '觀眾',
            description:
              '指明哪些接收者可以接受和處理這個令牌。這可以是多個觀眾的值數組或單個接收者的單一值。',
          },
          {
            claim: 'exp',
            full_name: '過期時間',
            description:
              '設置令牌過期時間，之後它就會失效。這有助於通過限制令牌的有效期來防止重播攻擊。',
          },
          {
            claim: 'nbf',
            full_name: '在此之前無效',
            description: '使令牌僅在此時間戳之後有效。對於沒有可用時鐘的情況非常有用。',
          },
          {
            claim: 'iat',
            full_name: '簽發時間',
            description: '令牌創建的時間。這可以用來確定令牌的年齡。',
          },
          {
            claim: 'jti',
            full_name: 'JWT ID',
            description: '令牌的唯一識別符，用於防止同一令牌被多次使用（例如，在重播攻擊中）。',
          },
        ],
      },
      other_token_claims: {
        description:
          '根據授權服務器的規範和配置，有可能在有效載荷中包含其他聲明以支持特定的用例。你還可以向 JWT 添加自定義聲明以滿足獨特的業務需求。',
        id_token: {
          title: 'ID 令牌',
          description:
            '在 OpenID Connect 中使用，其中包含用戶的配置文件信息（例如，姓名、電子郵件等）的聲明。',
        },
        access_token: {
          title: '訪問令牌',
          description: '在 OAuth 2.0 中使用，該令牌允許應用程序代表用戶訪問特定資源或 API。',
        },
      },
      notification: {
        label: '注意',
        description:
          '不要在 JWT 聲明中存儲私人或敏感信息。雖然 JWT 聲明是用 Base64URL 編碼的，但它們並未加密。這意味著任何擁有該令牌的人都可以解碼它並查看聲明，即使他們無法更改它而不使簽名無效。如果需要，使用加密或其他安全方法保護敏感數據。',
      },
    },
    when_to_use: {
      title: '什麼時候使用 JWT？',
      description: '在以下情況下，JWT 可能特別有用：',
      bullets: [
        {
          label: '微服務架構',
          description: '用於多個服務之間的無狀態身份驗證。',
        },
        {
          label: '單點登錄 (SSO) 系統',
          description: '使用一次身份驗證即可訪問多個應用程序。',
        },
        {
          label: '移動應用程序',
          description: '在 API 調用中有效地維持用戶會話。',
        },
        {
          label: '高流量應用程序',
          description: '在高流量環境中減少數據庫負擔。',
        },
        {
          label: '跨域資源共享 (CORS)',
          description: '簡化多個域之間的身份驗證。',
        },
        {
          label: '無服務器架構',
          description: '提供無狀態身份驗證，在服務器端會話較難以管理的情況下。',
        },
      ],
    },
    learn_more: '了解更多',
  },
  verify_jwt: {
    title: '如何驗證 JWT？',
    subtitle:
      '必須驗證 JWT 的完整性以確保其標頭和有效載荷未被篡改。以下是流行編程環境中驗證 JWT 的逐步示例：',
    ruby_label: '在 Ruby 中驗證 JWT',
    dotnet_label: '在 .NET 中驗證 JWT',
    java_label: '在 Java 中驗證 JWT',
    php_label: '在 PHP 中驗證 JWT',
    python_label: '在 Python 中驗證 JWT',
    go_label: '在 Go 中驗證 JWT',
    nodejs_label: '在 Node.js 中驗證 JWT',
    rust_label: '在 Rust 中驗證 JWT',
  },
  related_topics: {
    title: '相關的 JWT 主題',
    subtitle: '關於 JWT 的所有信息以及在不同框架中驗證 JWT 的逐步指南。',
    blogs: {
      jwt_algorithm: {
        title: 'JWT 算法：EC 與 RSA',
        description:
          '深入了解 JWT 的簽名算法，如 EC 和 RSA，以及如何為你的應用程序選擇最安全和高效的方法。',
      },
      id_token_and_access_token: {
        title: 'ID 令牌與訪問令牌與刷新令牌',
        description:
          '你了解 ID 令牌、訪問令牌和刷新令牌的具體用途嗎？從 JWT 的角度理解它們在身份驗證和授權過程中的角色。',
      },
      custom_jwt_token_claims: {
        title: '自定義 JWT 令牌聲明',
        description:
          'JWT 如何實現細粒度的訪問控制？比較 RBAC（基於角色的訪問控制）和 ABAC（基於屬性的訪問控制），找到為你的應用程序提供最佳解決方案。',
      },
      opaque_token_vs_jwt: {
        title: '不透明令牌與 JWT 令牌',
        description:
          '探索 JWT 和不透明令牌之間的核心區別，並了解為什麼 JWT 憑藉其高性能和可擴展性成為了現代身份驗證的首選。',
      },
      api_authorization: {
        title: 'API 授權：API 密鑰 vs. 基本身份驗證 vs. OAuth JWT 令牌',
        description:
          '探索三種常見的 API 授權機制及其優缺點。深入了解使用 OAuth JWT 令牌保護 API 的最佳實踐。',
      },
      jwt_vs_session_authentication: {
        title: 'JWT 與會話驗證',
        description:
          '基於會話的身份驗證依賴於服務器端存儲來維護用戶會話，而基於令牌的身份驗證則允許客戶端與服務器之間進行無狀態和可擴展的通信。發現 JWT 如何革新 API 安全，並為什麼它成為現代身份驗證的首選。',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          '在身份和訪問管理 (IAM) 領域經常使用的術語如 OAuth、OpenID Connect (OIDC)、SAML、SSO 和 JWT，但它們意味著什麼？它們是如何協同運作的？',
      },
    },
  },
  unblock_more_subtitle:
    '簡化你的工作流程，並通過 Logto Cloud 確保用戶管理的安全。它基於 OpenID Connect (OIDC)，利用 JWT 提供一個可靠的身份驗證和授權系統，設計用於滿足你的需求進行擴展。',
};

export default Object.freeze(jwt_decoder) satisfies typeof en;
