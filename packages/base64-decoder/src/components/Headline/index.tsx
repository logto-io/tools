import { usePhrases } from '../../i18n';
import { EditorMode } from '../../types';

import styles from './index.module.scss';

type Props = {
  readonly mode: EditorMode;
  readonly onModeChange: (mode: EditorMode) => void;
};

const Headline = ({ mode, onModeChange }: Props) => {
  const { t } = usePhrases();
  const modeLabel = mode === EditorMode.Decode ? t('decoder') : t('encoder');
  const switchLabel = mode === EditorMode.Decode ? t('encoder') : t('decoder');

  return (
    <div>
      <div className={styles.headline}>
        <h1>Base64 {modeLabel}</h1>
        <span className={styles.spacer}>/</span>
        <button
          className={styles.switchButton}
          onClick={() => {
            onModeChange(mode === EditorMode.Decode ? EditorMode.Encode : EditorMode.Decode);
          }}
        >
          {switchLabel}
        </button>
      </div>
      <p className={styles.subtitle}>{t('subtitle')}</p>
    </div>
  );
};

export default Headline;
