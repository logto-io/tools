import { useState } from 'react';

import CheckIcon from '../../../assets/checkmark.svg?react';
import CopyIcon from '../../../assets/copy.svg?react';
import { usePhrases } from '../../../i18n';
import Section from '../../components/Section';

import styles from './index.module.scss';

type Props = {
  readonly title: string;
  readonly description: string;
  readonly endpoint: string;
};

const Endpoint = ({ title, description, endpoint }: Props) => {
  const { t } = usePhrases();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(endpoint);
      setIsCopied(true);
    } catch {
      // Clipboard access can be denied (e.g. insecure context); keep the idle icon.
    }
  };

  const handleMouseLeave = () => {
    setIsCopied(false);
  };

  return (
    <Section title={title}>
      <div className={styles.endpointUrl}>
        {endpoint}
        <button
          type="button"
          aria-label={isCopied ? t('copied') : t('copy')}
          className={styles.icon}
          onClick={handleCopy}
          onMouseLeave={handleMouseLeave}
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
      <div className={styles.description}>{description}</div>
    </Section>
  );
};

export default Endpoint;
