import NotFoundIcon from '../../assets/not-found.svg?react';
import { usePhrases } from '../../i18n';

import styles from './index.module.scss';

const NotFound = () => {
  const { t } = usePhrases();

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <NotFoundIcon />
      </div>
      <div className={styles.title}>{t('provider_not_found')}</div>
      <div className={styles.description}>{t('provider_not_found_description')}</div>
    </div>
  );
};

export default NotFound;
