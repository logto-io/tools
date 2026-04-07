const jwt_decoder = {
  title:
    'JWT デコーダー & エンコーダー (JWT decoder & encoder) | セキュア、シンプル、そしてユーザーフレンドリー',
  description:
    'JWT をオンラインで迅速にデコードおよびエンコードし、その署名を検証します。さまざまなアルゴリズムを使用した JWT の例を探求し、ステップバイステップの JWT 実装ガイドを提供します。',
  encoder: 'エンコーダー',
  decoder: 'デコーダー',
  subtitle:
    'あなたのデータは 100% プライベートです -- JWT は完全にデバイス上で直接デコードおよびエンコードされます。',
  jwt_label: 'JWT',
  encoded_jwt_label: 'エンコードされた JWT',
  decoded_header_label: 'デコードされたヘッダー',
  header_label: 'ヘッダー',
  decoded_payload_label: 'デコードされたペイロード',
  payload_label: 'ペイロード',
  signature_verified: '署名が確認されました！',
  invalid_signature: '無効な署名！',
  jwt_editor_placeholder: 'JWT をここに貼り付けてください',
  hmac_secret_placeholder: 'HMAC 秘密を入力してください',
  public_key_placeholder: 'パブリックキーをここに入力してください',
  private_key_placeholder: 'プライベートキーをここに入力してください',
  jwks_endpoint_uri_placeholder: 'JWKs エンドポイント URL を入力してください',
  hmac_secret_label: '署名キー',
  jwks_endpoint_uri_label: 'JWKs エンドポイント URI',
  public_key_label: 'パブリックキー',
  private_key_label: 'プライベートキー',
  base64_encoded_label: 'Base64 でエンコード',
  jwks_endpoint_uri_link: 'JWKs エンドポイント URI',
  public_key_link: 'パブリックキーで確認',
  jwt_examples: 'JWT 例',
  share_jwt: 'JWT を共有',
  copy_to_clipboard: 'URL がクリップボードにコピーされました',
  instruction: {
    title: 'JWT について学ぶ',
    subtitle:
      'JWT に関するすべての情報と、多様なフレームワークで JWT を検証するためのステップバイステップガイド。',
    what_is_jwt: {
      title: 'JWT とは？',
      description:
        'JWT（JSON Web Token）は、情報を構造化されたわかりやすい形式で含んだ自己完結型のステートレスなトークンです。API を保護するか、アプリケーションでトークンベースの認証を採用するかにかかわらず、JWT は強力なツールです。その理由は次のとおりです：',
      bullets: [
        {
          label: 'ステートレス',
          description:
            'JWT は自己完結しており、検証のためにサーバー側の状態を必要としません。署名によりデータの整合性を確保できます。',
        },
        {
          label: 'クロスサービスの互換性',
          description: 'JWT は異なるサービス間で簡単に共有および確認することができます。',
        },
        {
          label: '拡張性',
          description:
            'JWT のペイロードにはカスタムクレームを含めることができ、柔軟な認可と情報の共有を可能にします。',
        },
      ],
    },
    jwt_structure: {
      title: 'JWT の構造',
      description:
        '通常の JWT は、Base64URL でエンコードされ、ピリオドで区切られた三つの部分に分かれている：',
      bullets: [
        {
          label: 'ヘッダー',
          description:
            '署名アルゴリズム（例：HS256 または RS256）やトークンの型（JWT など）といったメタデータを含みます。',
        },
        {
          label: 'ペイロード',
          description:
            'ユーザー ID、ユーザープロファイル、有効期限、スコープなどの実際のデータを含みます。',
        },
        {
          label: '署名',
          description:
            'ヘッダー、ペイロードの組み合わせをハッシュで加工し、秘密鍵を用いて保護しています。その目的は、トークンの完全性を確保し、改ざんされていないことを確認することです。',
        },
      ],
      summary:
        'この構造により、JWT はパーティ間で情報をコンパクトで安全に伝達する方法を提供します。',
    },
    token_claims: {
      title: 'JWT の一般的なトークンクレーム',
      description:
        'クレームはペイロードの一部であり、重要な情報を保持しています。以下は標準化された登録クレームです：',
      table: {
        headers: ['クレーム', 'フルネーム', '説明'],
        rows: [
          {
            claim: 'iss',
            full_name: '発行者',
            description: 'JWT を発行したエンティティ、例えば認証サーバー。',
          },
          {
            claim: 'sub',
            full_name: '主題',
            description: 'JWT の主題を識別し、通常は認証されたユーザーを表します。',
          },
          {
            claim: 'aud',
            full_name: '受信者',
            description:
              'どの受信者がトークンを受信して処理できるのかを指定します。これは単一の受信者に対する一つの値、または複数の受信者に対応する複数の値の配列として指定できます。',
          },
          {
            claim: 'exp',
            full_name: '有効期限',
            description:
              'トークンが無効になるまでの有効期限を設定します。これにより、トークンが有効である期間を制限し、リプレイ攻撃を防止するのに役立ちます。',
          },
          {
            claim: 'nbf',
            full_name: '有効開始時間',
            description:
              'このタイムスタンプの後にトークンが有効になります。クロックが利用できない状況で役立ちます。',
          },
          {
            claim: 'iat',
            full_name: '発行時刻',
            description:
              'トークンが作成された時刻を示します。これにより、トークンの年齢を判断できるようになります。',
          },
          {
            claim: 'jti',
            full_name: 'JWT ID',
            description:
              'トークンの一意の識別子であり、同じトークンが複数回使用されることを防ぐのに役立ちます（例：リプレイ攻撃で）。',
          },
        ],
      },
      other_token_claims: {
        description:
          '仕様や認証サーバーの設定によっては、特定のユースケースをサポートするために、ペイロードに追加のクレームが含まれることがあります。また、ビジネスの特定のニーズを満たすために JWT にカスタムクレームを追加することもできます。',
        id_token: {
          title: 'ID トークン',
          description:
            'OpenID Connect で使用され、認証されたユーザーのプロフィール情報（例：名前、メールなど）を含むクレームを含みます。',
        },
        access_token: {
          title: 'アクセス トークン',
          description:
            'OAuth 2.0 で使用され、ユーザーまたはアプリケーションに代わって特定のリソースまたは API へのアクセスを許可します。',
        },
      },
      notification: {
        label: '注意事項',
        description:
          'JWT クレームにプライベートまたは機密情報を保存しないでください。JWT クレームはエンコードされて（Base64URL を使用）いますが、暗号化されていません。これは、トークンを持っている人は、署名を無効にせずにトークンを改ざんできなくても、クレームをデコードして見られることを意味します。必要に応じて、機密データを保護するために、暗号化やその他の安全な方法を使用してください。',
      },
    },
    when_to_use: {
      title: 'JWT を使用するとき？',
      description: 'JWT は、次の状況で特に役立つことができます：',
      bullets: [
        {
          label: 'マイクロサービスアーキテクチャ',
          description: '複数のサービスにわたるステートレスな認証。',
        },
        {
          label: 'シングルサインオン (SSO) システム',
          description: '一つの認証で複数のアプリケーションへのアクセスを可能にします。',
        },
        {
          label: 'モバイルアプリケーション',
          description: 'API 呼び出しを通してユーザーセッションを効率的に維持。',
        },
        {
          label: '高トラフィック アプリケーション',
          description: ' 高ボリュームの環境でデータベースの負荷を軽減。',
        },
        {
          label: 'クロスオリジン リソース共有 (CORS)',
          description: ' 複数のドメインにわたる認証を簡素化。',
        },
        {
          label: 'サーバーレス アーキテクチャ',
          description: 'サーバーサイドセッションが難しいところでのステートレスな認証。',
        },
      ],
    },
    learn_more: 'さらに詳しく学ぶ',
  },
  verify_jwt: {
    title: 'JWT を検証する方法は？',
    subtitle:
      'JWT の完全性を確認するために、そのヘッダーやペイロードが改ざんされていないことを確認する必要があります。以下は人気のあるプログラミング環境で JWT を確認するためのステップバイステップの例です：',
    ruby_label: 'Ruby で JWT を検証',
    dotnet_label: '.NET で JWT を検証',
    java_label: 'Java で JWT を検証',
    php_label: 'PHP で JWT を検証',
    python_label: 'Python で JWT を検証',
    go_label: 'Go で JWT を検証',
    nodejs_label: 'Node.js で JWT を検証',
    rust_label: 'Rust で JWT を検証',
  },
  related_topics: {
    title: '関連する JWT トピック',
    subtitle:
      'JWT に関するすべての情報と、多様なフレームワークで JWT を検証するためのステップバイステップガイド。',
    blogs: {
      jwt_algorithm: {
        title: 'JWT アルゴリズム: EC vs. RSA',
        description:
          'JWT の署名アルゴリズムである EC と RSA について掘り下げ、アプリケーションに最も安全で効率的な方法を選択する方法を学びます。',
      },
      id_token_and_access_token: {
        title: 'ID トークン & アクセストークン & リフレッシュトークン',
        description:
          'ID トークン、アクセストークン、リフレッシュトークンの特別な目的をご存知ですか？JWT の観点から認証および認可プロセスでの役割を理解してください。',
      },
      custom_jwt_token_claims: {
        title: 'カスタム JWT トークンクレーム',
        description:
          'JWT はどのように細かいアクセス制御を実現しますか？RBAC（ロールベースアクセス制御）と ABAC（属性ベースアクセス制御）を比較して、アプリケーションに最適な解決策を見つけてください。',
      },
      opaque_token_vs_jwt: {
        title: '不透明なトークン vs. JWT トークン',
        description:
          'JWT と不透明なトークンの違いを掘り下げ、なぜ JWT が高いパフォーマンスとスケーラビリティを備えた現代の認証の選択肢になったのかを発見します。',
      },
      api_authorization: {
        title: 'API 認可: API キー  vs. 基本認証 vs. OAuth JWT トークン',
        description:
          '三つの一般的な API 認可メカニズムとその長所と短所を検討します。OAuth JWT トークンを使って API を保護するためのベストプラクティスについて掘り下げます。',
      },
      jwt_vs_session_authentication: {
        title: 'JWT vs. セッション認証',
        description:
          'セッションベースの認証は、ユーザーセッションを維持するためにサーバー側のストレージに依存しますが、トークンベースの認証は、クライアントとサーバー間のステートレスでスケーラブルな通信を可能にします。JWT が API セキュリティに革命を起こしている理由と、それが現代認証の好まれる選択肢になりつつある理由を発見してください。',
      },
      oauth_oidc_saml: {
        title: 'OAuth 2.0 & OIDC & SAML',
        description:
          'OAuth、OpenID Connect (OIDC)、SAML、SSO、JWT などの用語は、IAM（アイデンティティとアクセス管理）の分野でよく使われますが、これらは何を意味するのでしょうか？どのように連携して機能するのでしょうか？',
      },
    },
  },
  unblock_more_subtitle:
    'Logto Cloud でワークフローを簡素化し、ユーザー管理を確実にセキュリティする。OpenID Connect (OIDC) に基づき、JWT を活用して、ニーズに応じてスケールする信頼性の高い認証および認可システムを提供します。',
};

export default Object.freeze(jwt_decoder);
