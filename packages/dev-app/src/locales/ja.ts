import type en from './en';

const ja = {
  topbar: {
    banner_text: 'サイトと同じ構成の開発アプリで公開ツールを作成・プレビューします。',
    banner_link: 'ツール一覧',
    developers: '開発者',
    tools: 'ツール',
    language: '言語',
    github_star: '9.5k スター',
    sign_in: 'サインイン',
    get_started: 'はじめる',
  },
  home: {
    label: '開発者ツール',
    title: '公開ツール。',
    description:
      'このアプリは実サイトの上部レイアウトを再現し、各ツールを本番に近いシェルで開発・確認できます。各ツールは専用ルートを維持します。',
    tags: {
      topbar: 'Logto スタイルのトップバー',
      routes: '専用ツールルート',
      i18n: '共有 i18n 契約',
    },
    planned: '予定',
    coming_next: '近日公開',
    available_now: '利用可能',
    open_tool: 'ツールを開く',
  },
  tools: {
    jwtDecoder: {
      title: 'JWT デコーダー',
      description: 'サイト準拠のワークスペースで JWT のデコード、確認、編集、再署名を行います。',
    },
    samlDecoder: {
      title: 'SAML アサーションデコーダー',
      description: '次の予定: 同じツールシェルで XML アサーションを確認。',
    },
    base64Decoder: {
      title: 'Base64 デコーダー',
      description: '次の予定: バイナリおよびテキストペイロードを素早く確認。',
    },
  },
};

export default ja satisfies typeof en;
