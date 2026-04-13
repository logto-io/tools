import { JwtDecoder, type JwtDecoderI18nAdapter } from '@logto/tools-jwt-decoder';
import { useMemo } from 'react';

import { useCurrentLanguage, useDirection, usePhrases } from '../i18n';

import styles from './JwtDecoderPage.module.scss';

const JwtDecoderPage = () => {
  const currentLanguage = useCurrentLanguage();
  const direction = useDirection();
  const { t, getObject } = usePhrases('jwt_decoder');

  const i18n = useMemo<JwtDecoderI18nAdapter>(
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
      <JwtDecoder className={styles.decoder} i18n={i18n} />
    </div>
  );
};

export default JwtDecoderPage;
