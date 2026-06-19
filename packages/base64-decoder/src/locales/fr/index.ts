const base64_decoder = {
  title: 'Encodeur et décodeur Base64, expliqué | Privé, dans le navigateur',
  description:
    'Encodez et décodez des données Base64 et Base64URL dans le navigateur. Tout reste sur votre appareil. En prime : ce qu’est Base64, comment ça marche et quand l’utiliser.',
  encoder: 'Encodeur',
  decoder: 'Décodeur',
  subtitle:
    'Vos données restent 100 % privées -- Base64 est entièrement encodé et décodé directement sur votre appareil.',
  plain_text_label: 'Texte brut',
  base64_label: 'Base64',
  plain_text_placeholder: 'Saisissez le texte à encoder',
  base64_placeholder: 'Collez le Base64 à décoder',
  url_safe_label: 'Compatible URL (Base64URL)',
  url_safe_hint: 'Utilisez `-` et `_` au lieu de `+` et `/`, et omettez le remplissage `=`.',
  invalid_base64: 'Entrée Base64 invalide.',
  copy: 'Copier',
  copy_to_clipboard: 'Copié dans le presse-papiers',
  copy_failed: 'Échec de la copie dans le presse-papiers',
  welcome_sample: 'Bienvenue dans l’encodeur et le décodeur Base64 de Logto.',
};

export default Object.freeze(base64_decoder);
