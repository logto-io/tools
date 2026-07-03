const oauth_providers = {
  title: 'OAuth & OIDC 供應商探索器',
  description: '快速查找流行的 OAuth & OIDC 供應商的 OAuth 端點和相關的開發資源。',
  hint: '所有供應商信息均來自官方文檔，每個頁面上都有鏈接以供參考',
  app_title: 'OAuth & OIDC 供應商 <span>探索器</span>',
  search_placeholder: '搜索供應商（例如，GitHub, Google, Facebook）',
  clear_search: '清除搜尋',
  copy: '複製',
  copied: '已複製到剪貼簿',
  back_to_explorer: '返回探索器',
  details_title: '{{name}} OAuth 端點',
  details_description: '{{name}} OAuth 端點和相關的開發資源',
  oidc_details_title: '{{name}} OAuth & OIDC 端點',
  oidc_details_description: '{{name}} OAuth & OIDC 端點和相關的開發資源',
  unknown_details_title: '未知的 OAuth 供應商',
  unknown_details_description: '無法識別此 OAuth 供應商。',
  documentation_title: '{{name}} OAuth 文檔和資源',
  oidc_documentation_title: '{{name}} OAuth & OIDC 文檔和資源',
  authorization_endpoint: '{{name}} 授權端點',
  authorization_endpoint_description: '將用戶重定向到此端點以授予你的應用訪問他們帳戶的權限。',
  token_endpoint: '{{name}} 令牌端點',
  token_endpoint_description: '用於交換授權碼或刷新令牌以獲取訪問令牌和刷新令牌的端點。',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    '提供公共密鑰以驗證 JWT 令牌的 URI。這些密鑰用於驗證由授權服務器發行的令牌的真實性。',
  revocation_endpoint: '{{name}} 撤銷端點',
  revocation_endpoint_description:
    '用於在訪問令牌或刷新令牌過期前使其失效的端點，通常在用戶註銷或撤銷應用訪問時使用。',
  userinfo_endpoint: '{{name}} 用戶信息端點',
  userinfo_endpoint_description:
    '返回已認證用戶的配置信息標準化 OAuth 端點，包括基於訪問令牌範圍的當前用戶的信息。',
  end_session_endpoint: '{{name}} 結束會話端點',
  end_session_endpoint_description:
    '用於終止用戶在身份提供商處的會話的端點，通常用於實現單一註銷功能。',
  introspection_endpoint: '{{name}} 自省端點',
  introspection_endpoint_description:
    '允許授權方檢查訪問令牌或刷新令牌的狀態和有效性的端點，返回詳細的令牌元數據。',
  oidc_discovery_endpoint: '{{name}} OIDC 發現端點',
  oidc_discovery_endpoint_description:
    '提供 OpenID Connect 配置元數據的眾所周知的端點（.well-known/openid-configuration），包括所有可用的端點和支持的功能。',
  issuer: '{{name}} 發行者 URL',
  issuer_description: '唯一識別 OAuth/OIDC 供應商並用於驗證令牌的唯一標識符 URL',
  provider_not_found: '未找到供應商',
  provider_not_found_description: '我們找不到你正在尋找的 OAuth 供應商。它可能已被移除或不存在。',
};

export default Object.freeze(oauth_providers);
