import classNames from 'classnames';

import Headline from './Headline';
import ProviderList from './ProviderList';
import { I18nProvider, type OAuthProvidersExplorerI18nAdapter } from './i18n';
import styles from './index.module.scss';

/** Default relative URL so the details page resolves under the current list path. */
const defaultBuildProviderDetailsUrl = (id: string) => `oauth-providers-explorer/${id}`;

type Props = {
  readonly i18n: OAuthProvidersExplorerI18nAdapter;
  readonly className?: string;
  /**
   * Builds the URL of a provider details page from the provider id. Defaults to a
   * relative `oauth-providers-explorer/{id}` path.
   */
  readonly buildProviderDetailsUrl?: (id: string) => string;
};

const OAuthProvidersExplorer = ({
  i18n,
  className,
  buildProviderDetailsUrl = defaultBuildProviderDetailsUrl,
}: Props) => {
  return (
    <I18nProvider i18n={i18n}>
      <div className={classNames(styles.explorer, className)}>
        <Headline />
        <ProviderList buildProviderDetailsUrl={buildProviderDetailsUrl} />
      </div>
    </I18nProvider>
  );
};

export default OAuthProvidersExplorer;
