const base64_decoder = {
  title: 'Base64 エンコーダー / デコーダー｜高速・プライベート・ブラウザ上で動作',
  description:
    'ブラウザ上で Base64 および Base64URL のペイロードをエンコード・デコードできます。データはすべて手元のデバイスに留まります。',
  encoder: 'エンコーダー',
  decoder: 'デコーダー',
  subtitle:
    'あなたのデータは 100% プライベートです。Base64 のエンコードとデコードはすべてお使いのデバイス上で完結します。',
  plain_text_label: 'プレーンテキスト',
  base64_label: 'Base64',
  plain_text_placeholder: 'エンコードする文字列を入力',
  base64_placeholder: 'デコードする Base64 を貼り付け',
  url_safe_label: 'URL セーフ (Base64URL)',
  url_safe_hint: '`+` と `/` の代わりに `-` と `_` を使用し、`=` によるパディングを省略します。',
  invalid_base64: '無効な Base64 入力です。',
  copy: 'コピー',
  copy_to_clipboard: 'クリップボードにコピーしました',
  welcome_sample: 'Logto Base64 エンコーダー / デコーダーへようこそ。',
};

export default Object.freeze(base64_decoder);
