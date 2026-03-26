module.exports = {
  '*.{js,cjs,mjs,ts,tsx}': ['eslint --fix'],
  '*.{json,md,yml,yaml}': ['prettier --write --ignore-unknown'],
};
