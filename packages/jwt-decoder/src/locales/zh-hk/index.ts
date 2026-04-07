const jwt_decoder = {
  title: 'JWT 解碼器 & 編碼器 (JWT decoder & encoder) | 安全、簡單且用戶友好',
  description:
    '快速在線解碼和編碼 JWT，並驗證其簽名。使用不同算法探索 JWT 範例，以及逐步的 JWT 實施指南。',
  encoder: '編碼器',
  decoder: '解碼器',
  subtitle: '你的資料 100% 私隱 - JWT 完全在你的設備上進行解碼和編碼。',
  jwt_label: 'JWT',
  encoded_jwt_label: '編碼的 JWT',
  decoded_header_label: '解碼的標頭',
  header_label: '標頭',
  decoded_payload_label: '解碼的有效載荷',
  payload_label: '有效載荷',
  signature_verified: '簽名已驗證！',
  invalid_signature: '無效的簽名！',
  jwt_editor_placeholder: '在此貼上你的 JWT',
  hmac_secret_placeholder: '輸入 HMAC 秘密',
  public_key_placeholder: '在此輸入公共密鑰',
  private_key_placeholder: '在此輸入私密密鑰',
  jwks_endpoint_uri_placeholder: '輸入 JWKs 端點網址',
  hmac_secret_label: '簽名密鑰',
  jwks_endpoint_uri_label: 'JWKs 端點 URI',
  public_key_label: '公共密鑰',
  private_key_label: '私密密鑰',
  base64_encoded_label: 'Base64 編碼',
  jwks_endpoint_uri_link: 'JWKs 端點 URI',
  public_key_link: '透過公共密鑰驗證',
  jwt_examples: 'JWT 範例',
  share_jwt: '分享 JWT',
  copy_to_clipboard: '網址已複製到剪貼板',
  instruction: {
    title: '了解 JWT',
    subtitle: '所有你關心的關於 JWT 的資訊，以及分步指導如何在不同框架中驗證 JWT。',
    what_is_jwt: {
      title: '什麼是 JWT？',
      description:
        'JWT （JSON Web Token）是一種自包含的、無狀態的令牌，它以結構化和可讀的格式攜帶信息。無論你是在保護 API 或採用基於令牌的身份驗證，JWT 都是一個強大的工具，因為它們：',
      bullets: [
        {
          label: '無狀態',
          description:
            'JWT 是自包含的，不需要服務器端狀態來驗證。JWT 可以透過簽名來確保數據的完整性。',
        },
        {
          label: '跨服務兼容性',
          description: 'JWT 可以輕鬆地在不同的服務之間共享和驗證。',
        },
        {
          label: '可擴展性',
          description: 'JWT 的有效載荷可以包含自定義聲明，允許靈活的授權和資訊共享。',
        },
      ],
    },
    jwt_structure: {
      title: 'JWT 的結構',
      description: '一個典型的 JWT 被分為三部分，每部分都以 Base64URL 編碼，並且以句點（.）分隔：',
      bullets: [
        {
          label: '標頭',
          description: '包含元數據，例如簽名算法（例如，HS256 或 RS256）和令牌的類型（JWT）。',
        },
        {
          label: '有效載荷',
          description: '包含實際資料，例如用戶 ID、用戶配置文件、過期時間或範圍。',
        },
        {
          label: '簽名',
          description:
            '標頭、有效載荷的哈希組合，並使用秘密密鑰進行保護。其目的是確保令牌的完整性，並確認它未被更改',
        },
      ],
      summary: '此結構使得 JWT 可以在各方之間提供一種緊湊、可靠的資料傳輸方式。',
    },
    token_claims: {
      title: 'JWT 中常見的令牌聲明',
      description: '聲明是有效載荷的一部分，包含關鍵資訊。以下是供你參考的標準化註冊聲明：',
      table: {
        headers: ['聲明', '全名', '描述'],
        rows: [
          {
            claim: 'iss',
            full_name: '發行者',
            description: '發行 JWT 的實體，例如授權伺服器。',
          },
          {
            claim: 'sub',
            full_name: '主題',
            description: '識別 JWT 的主題，通常代表經過身份驗證的用戶。',
          },
          {
            claim: 'aud',
            full_name: '觀眾',
            description:
              '指定可以接受和處理令牌的收件人。這可以是多個受眾的值陣列，也可以是一個受眾的單一值。',
          },
          {
            claim: 'exp',
            full_name: '過期時間',
            description:
              '設置令牌的過期時間，之後令牌變得無效。這有助於透過限制令牌的有效時間來防止重播攻擊。',
          },
          {
            claim: 'nbf',
            full_name: '不早於',
            description: '使令牌只有在此時間戳之後才有效。當時鐘無法訪問時，這非常有用。',
          },
          {
            claim: 'iat',
            full_name: '發行時間',
            description: '令牌被創建的時間。這可用於確定令牌的年齡。',
          },
          {
            claim: 'jti',
            full_name: 'JWT ID',
            description: '令牌的唯一標識符，用於防止相同令牌被多次使用（例如，在重播攻擊中）。',
          },
        ],
      },
      other_token_claims: {
        description:
          '根據授權伺服器的規範和配置，可能會在有效載荷中包含其他聲明，以支持特定的用例。你也可以向 JWT 添加自定義聲明，以滿足獨特的業務需求。',
        id_token: {
          title: 'ID 令牌',
          description:
            '在 OpenID Connect 中使用，它包含有關經過身份驗證的用戶的聲明，例如配置文件資訊（例如，名稱，電子郵件等）。',
        },
        access_token: {
          title: '訪問令牌',
          description: '在 OAuth 2.0 中使用，它代表用戶或應用程序授予對特定資源或 API 的訪問權限。',
        },
      },
      notification: {
        label: '注意',
        description:
          '不要在 JWT 聲明中存儲私人或敏感資訊。儘管 JWT 聲明是編碼的（使用 Base64URL），但它們不是加密的。這意味著任何擁有令牌的人都可以解碼它並查看聲明，即使他們無法在不使簽名失效的情況下更改它。在必要時使用加密或其他安全的方法來保護敏感數據。',
      },
    },
    when_to_use: {
      title: '什麼時候使用 JWT？',
      description: '在以下場景中，JWT 特別有用：',
      bullets: [
        {
          label: '微服務架構',
          description: '在多個服務之間進行無狀態身份驗證。',
        },
        {
          label: '單點登錄（SSO）系統',
          description: '允許使用一次身份驗證訪問多個應用程序。',
        },
        {
          label: '移動應用程序',
          description: '高效地維持跨 API 調用的用戶會話。',
        },
        {
          label: '高流量應用程序',
          description: ' 減少高流量環境中的數據庫負載。',
        },
        {
          label: '跨源資源共享（CORS）',
          description: '簡化跨多個域的身份驗證。',
        },
        {
          label: '無伺服器架構',
          description: '在伺服器端會話困難的情況下，提供無狀態身份驗證。',
        },
      ],
    },
    learn_more: '進一步了解',
  },
  verify_jwt: {
    title: '如何驗證 JWT？',
    subtitle:
      '必須驗證 JWT 的完整性，以確保其標頭和有效載荷未被篡改。以下是在流行編程環境中驗證 JWT 的分步示例：',
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
    subtitle: '所有你關心的關於 JWT 的資訊，以及分步指導如何在不同框架中驗證 JWT。',
    blogs: {
      jwt_algorithm: {
        title: 'JWT 算法：EC vs. RSA',
        description:
          '深入了解 JWT 的簽名算法，例如 EC 和 RSA，並了解如何為你的應用選擇最安全和高效的方法。',
      },
      id_token_and_access_token: {
        title: 'ID 令牌 & 訪問令牌 & 刷新令牌',
        description:
          '你知道 ID 令牌、訪問令牌和刷新令牌的具體目的嗎？從 JWT 的角度了解它們在身份驗證和授權過程中的角色。',
      },
      custom_jwt_token_claims: {
        title: '自定義 JWT 令牌聲明',
        description:
          'JWT 如何實現細粒度的訪問控制？比較 RBAC （基於角色的訪問控制）和 ABAC （基於屬性的訪問控制）以找到最適合你的應用的解決方案。',
      },
      opaque_token_vs_jwt: {
        title: '不透明令牌 vs. JWT 令牌',
        description:
          '探索 JWT 和不透明令牌之間的核心差異，發現為什麼 JWT 以其高性能和可擴展性成為現代身份驗證的選擇。',
      },
      api_authorization: {
        title: 'API 授權：API 密鑰 vs. 基本身份驗證 vs. OAuth JWT 令牌',
        description:
          '探索三種常見的 API 授權機制及其優缺點。深入了解有關使用 OAuth JWT 令牌保護 API 的最佳實踐。',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. 基於會話的身份驗證',
        description:
          '基於會話的身份驗證依賴於伺服器端存儲來維持用戶的會話，而基於令牌的身份驗證則允許客戶端與伺服器之間的無狀態和可擴展的通信。發現 JWT 如何革命性地提高 API 安全性，並為什麼它成為現代身份驗證的首選方法',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          '像 OAuth、OpenID Connect （OIDC）、SAML、SSO 和 JWT 這樣的時髦術語經常出現在身份和訪問管理 （IAM）的領域，但它們是什麼意思？它們如何協同工作？',
      },
    },
  },
  unblock_more_subtitle:
    '使用 Logto Cloud 簡化你的工作流程，確保用戶管理的安全。其建立在 OpenID Connect (OIDC) 之上，利用 JWT 提供一個可靠且可擴展的身份驗證和授權系統，旨在滿足你的需求。',
};

export default Object.freeze(jwt_decoder);
