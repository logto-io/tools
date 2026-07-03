import conventional from '@commitlint/config-conventional';
import { type UserConfig } from '@commitlint/types';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [...conventional.rules['type-enum'][2], 'release']],
    'scope-enum': [2, 'always', ['repo', 'jwt-decoder', 'base64-decoder', 'oauth-providers-explorer', 'dev-app', 'i18nova', 'components', 'ci', 'deps']],
  },
};

export default config;
