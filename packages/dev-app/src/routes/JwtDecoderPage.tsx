import { JwtDecoder } from '@logto/tools-jwt-decoder';

import { type Language } from '../i18n';

import styles from './JwtDecoderPage.module.scss';

type Props = {
  readonly currentLanguage: Language;
};

const JwtDecoderPage = ({ currentLanguage }: Props) => {
  return (
    <div className={styles.page}>
      <JwtDecoder className={styles.decoder} currentLanguage={currentLanguage} />
    </div>
  );
};

export default JwtDecoderPage;
