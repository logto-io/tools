import { usePhrases } from '../../i18n';

import styles from './index.module.scss';

type Props = {
  readonly isUrlSafe: boolean;
  readonly onUrlSafeChange: (value: boolean) => void;
};

const OptionsBar = ({ isUrlSafe, onUrlSafeChange }: Props) => {
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
        <span className={styles.hint}>{t('url_safe_hint')}</span>
      </label>
    </div>
  );
};

export default OptionsBar;
