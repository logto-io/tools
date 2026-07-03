const oauth_providers = {
  title: 'OAuth & OIDC プロバイダー エクスプローラー',
  description:
    '人気の OAuth & OIDC プロバイダーの OAuth エンドポイントと関連する開発リソースを素早く調べる。',
  hint: 'すべてのプロバイダー情報は公式文書に基づいており、参考用のリンクが各ページにあります',
  app_title: 'OAuth & OIDC プロバイダー <span>エクスプローラー</span>',
  search_placeholder: 'プロバイダーを検索（例: GitHub、Google、Facebook）',
  back_to_explorer: 'エクスプローラーに戻る',
  details_title: '{{name}} OAuth エンドポイント',
  details_description: '{{name}} OAuth エンドポイントと関連する開発リソース',
  oidc_details_title: '{{name}} OAuth & OIDC エンドポイント',
  oidc_details_description: '{{name}} OAuth & OIDC エンドポイントと関連する開発リソース',
  unknown_details_title: '不明な OAuth プロバイダー',
  unknown_details_description: 'この OAuth プロバイダーは認識されていません。',
  documentation_title: '{{name}} OAuth ドキュメントとリソース',
  oidc_documentation_title: '{{name}} OAuth & OIDC ドキュメントとリソース',
  authorization_endpoint: '{{name}} 認可エンドポイント',
  authorization_endpoint_description:
    'ユーザーにアカウントへのアクセスを許可するために、ユーザーをリダイレクトするエンドポイント。',
  token_endpoint: '{{name}} トークンエンドポイント',
  token_endpoint_description:
    '認可コードまたはリフレッシュトークンをアクセストークンとリフレッシュトークンに交換するエンドポイント。',
  jwks_uri: '{{name}} JWKS URI',
  jwks_uri_description:
    'JWT トークンの検証に使用する公開鍵を提供する URI 。これらの鍵は、認可サーバーによって発行されたトークンの正当性を検証するために使用される。',
  revocation_endpoint: '{{name}} 失効エンドポイント',
  revocation_endpoint_description:
    'アクセストークンやリフレッシュトークンを有効期限前に無効化するためのエンドポイントで、通常はユーザーがログアウトしたときやアプリケーションアクセスを取り消したときに使用される。',
  userinfo_endpoint: '{{name}} ユーザー情報エンドポイント',
  userinfo_endpoint_description:
    '認証されたユーザーのプロファイル情報を返す標準化された OAuth エンドポイントで、アクセストークンのスコープに基づいた現在のユーザーに関するクレームを含む。',
  end_session_endpoint: '{{name}} セッション終了エンドポイント',
  end_session_endpoint_description:
    '認証プロバイダーにおけるユーザーのセッションを終了させるためのエンドポイントで、主にシングルサインアウト機能の実装に使用される。',
  introspection_endpoint: '{{name}} インスペクションエンドポイント',
  introspection_endpoint_description:
    'アクセストークンまたはリフレッシュトークンの状態と有効性を確認するためのエンドポイントで、詳細なトークンメタデータを返す。',
  oidc_discovery_endpoint: '{{name}} OIDC 発見エンドポイント',
  oidc_discovery_endpoint_description:
    'OpenID Connect の設定メタデータを提供する well-known エンドポイント（.well-known/openid-configuration）で、利用可能なすべてのエンドポイントとサポートされている機能を含む。',
  issuer: '{{name}} issuer URL',
  issuer_description:
    'OAuth/OIDC プロバイダーを識別する一意の識別子 URL で、トークンを検証するために使用される',
  provider_not_found: 'プロバイダーが見つかりません',
  provider_not_found_description:
    'お探しの OAuth プロバイダーが見つかりません。削除されたか存在しない可能性があります。',
};

export default Object.freeze(oauth_providers);
