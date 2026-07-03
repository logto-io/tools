import { Trans } from '@logto/tools-i18nova/react';

import { usePhrases } from '../i18n';

import styles from './index.module.scss';

const Headline = () => {
  const { t } = usePhrases();

  return (
    <div className={styles.headline}>
      <h2>
        <Trans
          phrase={t('app_title')}
          components={{
            span: ({ children }) => <span className={styles.highlight}>{children}</span>,
          }}
        />
      </h2>
      <p className={styles.subtitle}>{t('description')}</p>
    </div>
  );
};

export default Headline;
