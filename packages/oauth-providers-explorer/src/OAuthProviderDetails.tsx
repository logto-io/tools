import classNames from 'classnames';
import { useMemo } from 'react';

import Documentation from './ProviderDetails/Documentation';
import Endpoints from './ProviderDetails/Endpoints';
import Header from './ProviderDetails/Header';
import NotFound from './components/NotFound';
import { I18nProvider, type OAuthProvidersExplorerI18nAdapter } from './i18n';
import styles from './index.module.scss';
import { getProviderById } from './provider-data';

type Props = {
  readonly i18n: OAuthProvidersExplorerI18nAdapter;
  readonly providerId?: string;
  readonly className?: string;
};

const OAuthProviderDetails = ({ i18n, providerId, className }: Props) => {
  const provider = useMemo(() => {
    if (!providerId) {
      return;
    }

    return getProviderById(providerId);
  }, [providerId]);

  return (
    <I18nProvider i18n={i18n}>
      <div className={classNames(styles.details, className)}>
        {provider && (
          <>
            <Header data={provider} />
            <Endpoints data={provider} />
            <Documentation data={provider} />
          </>
        )}
        {!provider && <NotFound />}
      </div>
    </I18nProvider>
  );
};

export default OAuthProviderDetails;
