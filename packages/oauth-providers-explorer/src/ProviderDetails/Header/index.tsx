import { usePhrases } from '../../i18n';
import { type ProviderData } from '../../types';

import styles from './index.module.scss';

type Props = {
  readonly data: ProviderData;
};

const Header = ({ data: { name, Icon, oidcSupported } }: Props) => {
  const { t } = usePhrases();
  return (
    <div className={styles.header}>
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>
          {t(oidcSupported ? 'oidc_details_title' : 'details_title', { name })}
        </h1>
        <p className={styles.description}>
          {t(oidcSupported ? 'oidc_details_description' : 'details_description', { name })}
        </p>
      </div>
    </div>
  );
};

export default Header;
