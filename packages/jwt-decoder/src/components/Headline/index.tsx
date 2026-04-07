import { useContext } from 'react';

import { JwtContext } from '../../context/JwtContextProvider';
import { usePhrases } from '../../i18n';
import { EditorMode } from '../../types';

import styles from './index.module.scss';

const Headline = () => {
  const { mode, setMode } = useContext(JwtContext);
  const { t } = usePhrases('jwt_decoder');
  const modeLabel = mode === EditorMode.Decode ? t('decoder') : t('encoder');
  const switchLabel = mode === EditorMode.Decode ? t('encoder') : t('decoder');

  return (
    <div>
      <div className={styles.headline}>
        <h1>JWT {modeLabel}</h1>
        <span className={styles.spacer}>/</span>
        <button
          className={styles.switchButton}
          onClick={() => {
            setMode(mode === EditorMode.Decode ? EditorMode.Encode : EditorMode.Decode);
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
