module.exports = {
  '*.{js,cjs,mjs,ts,tsx}': ['eslint --fix'],
  '*.scss': ['stylelint --fix'],
  '*.{json,md,yml,yaml}': ['prettier --write --ignore-unknown'],
};
