import {
  OAuthProvidersExplorer,
  type OAuthProvidersExplorerI18nAdapter,
} from '@logto/tools-oauth-providers-explorer';
import { useMemo } from 'react';

import { useCurrentLanguage, useDirection, usePhrases } from '../i18n';

import styles from './OAuthProvidersExplorerPage.module.scss';

const buildProviderDetailsUrl = (id: string) => `/oauth-providers-explorer/${id}`;

const OAuthProvidersExplorerPage = () => {
  const currentLanguage = useCurrentLanguage();
  const direction = useDirection();
  const { t, getObject } = usePhrases('oauth_providers');

  const i18n = useMemo<OAuthProvidersExplorerI18nAdapter>(
    () => ({
      currentLanguage,
      direction,
      t,
      getObject,
    }),
    [currentLanguage, direction, getObject, t]
  );

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <OAuthProvidersExplorer i18n={i18n} buildProviderDetailsUrl={buildProviderDetailsUrl} />
      </div>
    </div>
  );
};

export default OAuthProvidersExplorerPage;
