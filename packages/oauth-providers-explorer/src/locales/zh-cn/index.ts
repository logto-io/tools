const oauth_providers = {
  title: 'OAuth & OIDC 提供商浏览器',
  description: '快速查找流行的 OAuth 和 OIDC 提供商的 OAuth 端点和相关开发资源。',
  hint: '所有提供商信息均来自官方文档，每一页都有参考链接',
  app_title: 'OAuth & OIDC 提供商 <span>浏览器</span>',
  search_placeholder: '搜索提供商（例如，GitHub、Google、Facebook）',
  back_to_explorer: '返回浏览器',
  details_title: '{{name}} OAuth 端点',
  details_description: '{{name}} OAuth 端点和相关开发资源',
  oidc_details_title: '{{name}} OAuth & OIDC 端点',
  oidc_details_description: '{{name}} OAuth & OIDC 端点和相关开发资源',
  unknown_details_title: '未知的 OAuth 提供商',
  unknown_details_description: '此 OAuth 提供商无法识别。',
  documentation_title: '{{name}} OAuth 文档和资源',
  oidc_documentation_title: '{{name}} OAuth & OIDC 文档和资源',
  authorization_endpoint: '{{name}} 授权端点',
  authorization_endpoint_description: '引导用户到此端点以授予你的应用程序访问他们帐户的权限。',
  token_endpoint: '{{name}} 令牌端点',
  token_endpoint_description: '用于交换授权码或刷新令牌以获取访问令牌和刷新令牌的端点。',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    '提供用于验证 JWT 令牌的公钥的 URI。这些密钥用于验证由授权服务器签发的令牌的真实性。',
  revocation_endpoint: '{{name}} 吊销端点',
  revocation_endpoint_description:
    '在访问令牌或刷新令牌到期之前使其失效的端点，通常在用户注销或撤销应用程序访问时使用。',
  userinfo_endpoint: '{{name}} 用户信息端点',
  userinfo_endpoint_description:
    '标准化的 OAuth 端点，返回经过身份验证的用户个人信息，包括基于访问令牌范围的当前用户声明。',
  end_session_endpoint: '{{name}} 会话结束端点',
  end_session_endpoint_description:
    '用于终止用户在身份提供商处会话的端点，常用于实现单点注销功能。',
  introspection_endpoint: '{{name}} 内省端点',
  introspection_endpoint_description:
    '允许授权方检查访问令牌或刷新令牌的状态和有效性的端点，返回详细的令牌元数据。',
  oidc_discovery_endpoint: '{{name}} OIDC 发现端点',
  oidc_discovery_endpoint_description:
    '提供 OpenID Connect 配置元数据的知名端点 (.well-known/openid-configuration)，包括所有可用端点和支持的功能。',
  issuer: '{{name}} issuer URL',
  issuer_description: '标识 OAuth/OIDC 提供商并用于验证令牌的唯一标识符 URL',
  provider_not_found: '未找到提供商',
  provider_not_found_description: '我们找不到你正在寻找的 OAuth 提供商。它可能已被删除或不存在。',
};

export default Object.freeze(oauth_providers);
