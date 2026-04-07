import { JwtDecoder } from '@logto/tools-jwt-decoder';

import styles from './JwtDecoderPage.module.scss';

const JwtDecoderPage = () => {
  return (
    <div className={styles.page}>
      <JwtDecoder className={styles.decoder} />
    </div>
  );
};

export default JwtDecoderPage;
