const jwt_decoder = {
  title: 'JWT 解码器和编码器 (JWT decoder & encoder) | 安全、简单且用户友好',
  description:
    '快速在线解码和编码 JWT，并验证它们的签名。使用不同算法探索 JWT 示例，以及逐步的 JWT 实现指南。',
  encoder: '编码器',
  decoder: '解码器',
  subtitle: '你的数据是 100% 私密的——JWT 完全在你的设备上解码和编码。',
  jwt_label: 'JWT',
  encoded_jwt_label: '编码后的 JWT',
  decoded_header_label: '解码后的头部',
  header_label: '头部',
  decoded_payload_label: '解码后的有效载荷',
  payload_label: '有效载荷',
  signature_verified: '签名已验证！',
  invalid_signature: '签名无效！',
  jwt_editor_placeholder: '在此粘贴你的 JWT',
  hmac_secret_placeholder: '输入 HMAC 密钥',
  public_key_placeholder: '在此处输入公钥',
  private_key_placeholder: '在此处输入私钥',
  jwks_endpoint_uri_placeholder: '输入 JWKs 端点 URL',
  hmac_secret_label: '签名密钥',
  jwks_endpoint_uri_label: 'JWKs 端点 URI',
  public_key_label: '公钥',
  private_key_label: '私钥',
  base64_encoded_label: 'Base64 编码',
  jwks_endpoint_uri_link: 'JWKs 端点 URI',
  public_key_link: '通过公钥验证',
  jwt_examples: 'JWT 示例',
  share_jwt: '分享 JWT',
  copy_to_clipboard: ' URL 已复制到剪贴板',
  instruction: {
    title: '了解 JWT',
    subtitle: '所有关于 JWT 的信息以及分步指南，帮助你在不同框架中验证 JWT。',
    what_is_jwt: {
      title: '什么是 JWT？',
      description:
        'JWT（JSON Web Token）是一种自包含且无状态的令牌，以结构化和可读的格式携带信息。无论你是保护 API 还是为应用程序采纳基于令牌的身份验证，JWTs 都是一个强大的工具，因为它们：',
      bullets: [
        {
          label: '无状态',
          description: 'JWTs 是自包含的，不需要服务端状态来验证。JWT 可以通过签名确保数据完整性。',
        },
        {
          label: '跨服务兼容',
          description: 'JWTs 可以在不同服务之间轻松共享和验证。',
        },
        {
          label: '可扩展',
          description: 'JWT 的有效载荷可以包含自定义声明，允许灵活的授权和信息共享。',
        },
      ],
    },
    jwt_structure: {
      title: 'JWT 的结构',
      description: '一个典型的 JWT 被分成三部分，每部分都使用 Base64URL 编码并用点（.）分隔：',
      bullets: [
        {
          label: '头部',
          description: '包含元数据，如签名算法（例如，HS256 或 RS256）和令牌的类型（JWT）。',
        },
        {
          label: '有效载荷',
          description: '包含实际数据，如用户 ID、用户资料、到期时间或作用域。',
        },
        {
          label: '签名',
          description:
            '头部、有效载荷的哈希组合，并使用密钥进行安全保护。其目的是确保令牌的完整性和确认未被篡改。',
        },
      ],
      summary: '这种结构使 JWT 可以在各方之间提供一种紧凑、安全的信息传输方式。',
    },
    token_claims: {
      title: 'JWT 中的常见令牌声明',
      description: '声明是有效载荷的一部分，持有关键信息。以下是标准化的注册声明供参考：',
      table: {
        headers: ['声明', '全名', '描述'],
        rows: [
          {
            claim: 'iss',
            full_name: '发行者',
            description: '发布该 JWT 的实体，比如授权服务器。',
          },
          {
            claim: 'sub',
            full_name: '主题',
            description: '标识 JWT 的主题，通常代表经过身份验证的用户。',
          },
          {
            claim: 'aud',
            full_name: '受众',
            description:
              '指定哪些接收者可以接受和处理该令牌。这可以是多个受众的值数组或单个受众的单个值。',
          },
          {
            claim: 'exp',
            full_name: '到期时间',
            description: '在该时间之后令牌会失效。这有助于通过限制令牌的有效时间来防止重放攻击。',
          },
          {
            claim: 'nbf',
            full_name: '在此之前无效',
            description: '使令牌仅在该时间戳之后有效。在无法访问时钟的情况下很有帮助。',
          },
          {
            claim: 'iat',
            full_name: '发行时间',
            description: '令牌创建的时间。可用于确定令牌的年龄。',
          },
          {
            claim: 'jti',
            full_name: 'JWT ID',
            description: '令牌的唯一标识符，有助于防止令牌多次使用（例如，在重放攻击中）。',
          },
        ],
      },
      other_token_claims: {
        description:
          '根据规范和授权服务器的配置，可能在负载中包含其他声明以支持特定的使用场景。你还可以向 JWT 添加自定义声明以满足独特的业务需求。',
        id_token: {
          title: 'ID 令牌',
          description:
            '在 OpenID Connect 中使用，包含关于经过身份验证用户的资料信息（例如，姓名、电子邮件等。）的声明。',
        },
        access_token: {
          title: '访问令牌',
          description: '在 OAuth 2.0 中使用，代表用户或应用程序授权访问特定资源或 API。',
        },
      },
      notification: {
        label: '注意',
        description:
          '请勿在 JWT 声明中存储私人或敏感信息。虽然 JWT 声明经过编码（使用 Base64URL），但它们未加密。这意味着任何拥有令牌的人都可以对其解码并查看声明，即使他们无法在不使签名无效的情况下篡改它。当需要时，使用加密或其他安全方法保护敏感数据。',
      },
    },
    when_to_use: {
      title: '什么时候使用 JWT？',
      description: 'JWT 在以下场景中特别有帮助：',
      bullets: [
        {
          label: '微服务架构',
          description: '用于多个服务之间无状态的身份验证。',
        },
        {
          label: '单点登录 (SSO) 系统',
          description: '通过一次身份验证访问多个应用程序。',
        },
        {
          label: '移动应用程序',
          description: '高效维护 API 调用中用户会话。',
        },
        {
          label: '高流量应用程序',
          description: '在高容量环境中降低数据库负载。',
        },
        {
          label: '跨域资源共享 (CORS)',
          description: '简化多个域之间的身份验证。',
        },
        {
          label: '无服务器架构',
          description: '提供无状态身份验证，但服务端会话具有挑战性。',
        },
      ],
    },
    learn_more: '了解更多',
  },
  verify_jwt: {
    title: '如何验证 JWT？',
    subtitle:
      '必须验证 JWT 的完整性，以确保其头部和载荷没有被篡改。以下是流行编程环境中验证 JWT 的分步示例：',
    ruby_label: '在 Ruby 中验证 JWT',
    dotnet_label: '在 .NET 中验证 JWT',
    java_label: '在 Java 中验证 JWT',
    php_label: '在 PHP 中验证 JWT',
    python_label: '在 Python 中验证 JWT',
    go_label: '在 Go 中验证 JWT',
    nodejs_label: '在 Node.js 中验证 JWT',
    rust_label: '在 Rust 中验证 JWT',
  },
  related_topics: {
    title: '相关 JWT 主题',
    subtitle: '所有关于 JWT 的信息以及分步指南，帮助你在不同框架中验证 JWT。',
    blogs: {
      jwt_algorithm: {
        title: 'JWT 算法：EC vs. RSA',
        description:
          '深入了解 JWT 的签名算法，例如 EC 和 RSA，并了解如何为你的应用程序选择最安全高效的方法。',
      },
      id_token_and_access_token: {
        title: 'ID 令牌 & 访问令牌 & 刷新令牌',
        description:
          '你知道 ID 令牌、访问令牌和刷新令牌的具体用途吗？从 JWT 的角度了解它们在身份验证和授权过程中扮演的角色。',
      },
      custom_jwt_token_claims: {
        title: '自定义 JWT 令牌声明',
        description:
          'JWT 是如何实现细粒度访问控制的？比较 RBAC（基于角色访问控制）和 ABAC（基于属性访问控制），以寻找最适合你的应用程序的解决方案。',
      },
      opaque_token_vs_jwt: {
        title: '不透明令牌 vs. JWT 令牌',
        description:
          '探索 JWT 和不透明令牌之间的核心区别，并了解为什么 JWT 是现代身份验证的选择，其具有高性能和可扩展性。',
      },
      api_authorization: {
        title: 'API 授权：API 密钥 vs. 基本身份验证 vs. OAuth JWT 令牌',
        description:
          '探索三种常用 API 授权机制的优缺点。深入了解如何使用 OAuth JWT 令牌保护你的 API。',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. 会话身份验证',
        description:
          '基于会话的身份验证依赖于服务器端存储来维护用户会话，而基于令牌的身份验证允许无状态和可扩展的客户端和服务器之间的通信。了解 JWT 如何革新 API 安全性以及为什么它成为现代身份验证的首选。',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'OAuth、OpenID Connect (OIDC)、SAML、SSO 和 JWT 这些术语在身份和访问管理 (IAM) 领域中经常使用，但它们是什么意思？它们如何协同工作？',
      },
    },
  },
  unblock_more_subtitle:
    '通过 Logto Cloud 简化你的工作流并确保安全的用户管理。基于 OpenID Connect (OIDC) 构建，它利用 JWT 提供可靠的身份验证和授权系统，旨在满足你的扩展需求。',
};

export default Object.freeze(jwt_decoder);
