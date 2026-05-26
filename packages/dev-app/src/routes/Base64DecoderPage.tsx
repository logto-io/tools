import { Base64Decoder, type Base64DecoderI18nAdapter } from '@logto/tools-base64-decoder';
import { useMemo } from 'react';

import { useCurrentLanguage, useDirection, usePhrases } from '../i18n';

import styles from './Base64DecoderPage.module.scss';

const Base64DecoderPage = () => {
  const currentLanguage = useCurrentLanguage();
  const direction = useDirection();
  const { t, getObject } = usePhrases('base64_decoder');

  const i18n = useMemo<Base64DecoderI18nAdapter>(
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
      <Base64Decoder i18n={i18n} />
    </div>
  );
};

export default Base64DecoderPage;
