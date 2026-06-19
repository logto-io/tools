import { type ReactNode } from 'react';

import { usePhrases } from '../../i18n';

import styles from './index.module.scss';

type Props = {
  readonly isUrlSafe: boolean;
  readonly onUrlSafeChange: (value: boolean) => void;
  /**
   * Optional node rendered in parentheses after the URL-safe hint, e.g. a
   * "learn more" link to a deeper explanation. The host owns its href and label.
   */
  readonly urlSafeLearnMore?: ReactNode;
};

const OptionsBar = ({ isUrlSafe, onUrlSafeChange, urlSafeLearnMore }: Props) => {
  const { t } = usePhrases();

  return (
    <div className={styles.optionsBar}>
      <label className={styles.option}>
        <input
          type="checkbox"
          checked={isUrlSafe}
          onChange={(event) => {
            onUrlSafeChange(event.target.checked);
          }}
        />
        <span className={styles.label}>{t('url_safe_label')}</span>
        <span className={styles.hint}>
          {t('url_safe_hint')}
          {urlSafeLearnMore && <> ({urlSafeLearnMore})</>}
        </span>
      </label>
    </div>
  );
};

export default OptionsBar;
