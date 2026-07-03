import {
  OAuthProviderDetails,
  type OAuthProvidersExplorerI18nAdapter,
} from '@logto/tools-oauth-providers-explorer';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useCurrentLanguage, useDirection, usePhrases } from '../i18n';

import styles from './OAuthProviderDetailsPage.module.scss';

const OAuthProviderDetailsPage = () => {
  const { id } = useParams();
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
        <Link to="/oauth-providers-explorer" className={styles.backLink}>
          {t('back_to_explorer')}
        </Link>
        <OAuthProviderDetails i18n={i18n} providerId={id} />
      </div>
    </div>
  );
};

export default OAuthProviderDetailsPage;
