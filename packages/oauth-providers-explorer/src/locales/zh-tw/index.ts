const oauth_providers = {
  title: 'OAuth 與 OIDC 供應商探索器',
  description: '快速查找熱門 OAuth 和 OIDC 供應商的 OAuth 端點及相關開發資源。',
  hint: '所有供應商資訊均來自官方文件，每頁都有參考的連結',
  app_title: 'OAuth 與 OIDC 供應商 <span>探索器</span>',
  search_placeholder: '搜尋供應商 (例如，GitHub、Google、Facebook)',
  clear_search: '清除搜尋',
  copy: '複製',
  copied: '已複製到剪貼簿',
  back_to_explorer: '返回探索器',
  details_title: '{{name}} OAuth 端點',
  details_description: '{{name}} OAuth 端點及相關開發資源',
  oidc_details_title: '{{name}} OAuth 與 OIDC 端點',
  oidc_details_description: '{{name}} OAuth 與 OIDC 端點及相關開發資源',
  unknown_details_title: '未知的 OAuth 供應商',
  unknown_details_description: '未能識別此 OAuth 供應商。',
  documentation_title: '{{name}} OAuth 文件和資源',
  oidc_documentation_title: '{{name}} OAuth 與 OIDC 文件和資源',
  authorization_endpoint: '{{name}} 授權端點',
  authorization_endpoint_description: '用來重定向用戶以授予你的應用程式訪問其帳戶的端點。',
  token_endpoint: '{{name}} 令牌端點',
  token_endpoint_description: '用來交換授權碼或刷新令牌以獲取訪問令牌和刷新令牌的端點。',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    '提供用於驗證 JWT 令牌公鑰的 URI。這些密鑰用於驗證由授權伺服器發送的令牌的真實性。',
  revocation_endpoint: '{{name}} 撤銷端點',
  revocation_endpoint_description:
    '用來在到期時間之前使訪問令牌或刷新令牌無效的端點，通常在用戶註銷或撤銷應用程式訪問時使用。',
  userinfo_endpoint: '{{name}} 用戶資訊端點',
  userinfo_endpoint_description:
    '標準化 OAuth 端點，根據訪問令牌的範圍返回經身份驗證的用戶檔案資訊，包括有關當前用戶的聲明。',
  end_session_endpoint: '{{name}} 結束會話端點',
  end_session_endpoint_description:
    '用來終止用戶在身份提供者的會話的端點，通常用於實現單次登出功能。',
  introspection_endpoint: '{{name}} 檢查端點',
  introspection_endpoint_description:
    '使授權方能夠檢查訪問令牌或刷新令牌的狀態和效力的端點，返回詳細的令牌元數據。',
  oidc_discovery_endpoint: '{{name}} OIDC 發現端點',
  oidc_discovery_endpoint_description:
    '提供 OpenID Connect 配置元數據的已知端點 (.well-known/openid-configuration)，包括所有可用的端點和支持的功能。',
  issuer: '{{name}} 發行者 URL',
  issuer_description: '用於識別 OAuth/OIDC 提供者並驗證令牌的唯一識別符 URL',
  provider_not_found: '未找到供應商',
  provider_not_found_description: '我們找不到你要找的 OAuth 供應商。它可能已移除或不存在。',
};

export default Object.freeze(oauth_providers);
