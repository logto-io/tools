import { type ProviderData } from '../../types';

import styles from './index.module.scss';

type Props = {
  readonly data: ProviderData;
  readonly buildProviderDetailsUrl: (id: string) => string;
};

const ProviderItem = ({
  data: { id, name, Icon, oidcSupported },
  buildProviderDetailsUrl,
}: Props) => {
  return (
    <a className={styles.item} href={buildProviderDetailsUrl(id)}>
      <div className={styles.logo}>
        <Icon />
      </div>
      <div className={styles.data}>
        <span className={styles.name}>{name}</span>
        <span className={styles.supportedSpecs}>
          <span>OAuth 2.0</span>
          {oidcSupported && <span>&nbsp;•&nbsp;OIDC</span>}
        </span>
      </div>
    </a>
  );
};

export default ProviderItem;
