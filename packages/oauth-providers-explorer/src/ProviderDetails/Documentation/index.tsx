import DocumentationIcon from '../../assets/docs.svg?react';
import ExternalLinkIcon from '../../assets/external-link.svg?react';
import FlipOnRtl from '../../components/FlipOnRtl';
import { usePhrases } from '../../i18n';
import { type ProviderData } from '../../types';
import Section from '../components/Section';

import styles from './index.module.scss';

type Props = {
  readonly data: ProviderData;
};

const Documentation = ({ data: { name, oidcSupported, documentations } }: Props) => {
  const { t } = usePhrases();
  return (
    <div className={styles.documentation}>
      <Section
        title={t(oidcSupported ? 'oidc_documentation_title' : 'documentation_title', { name })}
      >
        <div className={styles.list}>
          {documentations?.map(({ title, url }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener nofollow noreferrer"
              className={styles.link}
            >
              <DocumentationIcon />
              {title}
              <FlipOnRtl>
                <ExternalLinkIcon />
              </FlipOnRtl>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Documentation;
