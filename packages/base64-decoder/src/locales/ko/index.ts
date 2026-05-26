const base64_decoder = {
  title: 'Base64 인코더 및 디코더 | 빠르고 안전하며 브라우저에서 바로 동작',
  description:
    '브라우저에서 Base64와 Base64URL 데이터를 인코딩하고 디코딩하세요. 모든 데이터는 기기 안에서만 처리됩니다.',
  encoder: '인코더',
  decoder: '디코더',
  subtitle:
    '데이터는 100% 비공개로 유지됩니다. Base64 인코딩과 디코딩은 모두 사용자의 기기에서 직접 수행됩니다.',
  plain_text_label: '일반 텍스트',
  base64_label: 'Base64',
  plain_text_placeholder: '인코딩할 텍스트를 입력하세요',
  base64_placeholder: '디코딩할 Base64 문자열을 붙여 넣으세요',
  url_safe_label: 'URL 안전 (Base64URL)',
  url_safe_hint: '`+`와 `/` 대신 `-`와 `_`를 사용하고 `=` 패딩을 생략합니다.',
  invalid_base64: '유효하지 않은 Base64 입력입니다.',
  copy: '복사',
  copy_to_clipboard: '클립보드에 복사되었습니다',
  copy_failed: '클립보드에 복사하지 못했습니다',
  welcome_sample: 'Logto Base64 인코더 및 디코더에 오신 것을 환영합니다.',
};

export default Object.freeze(base64_decoder);
