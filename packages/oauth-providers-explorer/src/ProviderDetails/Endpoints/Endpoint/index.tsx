import { useState } from 'react';

import CheckIcon from '../../../assets/checkmark.svg?react';
import CopyIcon from '../../../assets/copy.svg?react';
import { onKeyDownHandler } from '../../../utils/a11y';
import Section from '../../components/Section';

import styles from './index.module.scss';

type Props = {
  readonly title: string;
  readonly description: string;
  readonly endpoint: string;
};

const Endpoint = ({ title, description, endpoint }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(endpoint);
    setIsCopied(true);
  };

  const handleMouseLeave = () => {
    setIsCopied(false);
  };

  return (
    <Section title={title}>
      <div className={styles.endpointUrl}>
        {endpoint}
        <span
          role="button"
          tabIndex={0}
          className={styles.icon}
          onClick={handleCopy}
          onMouseLeave={handleMouseLeave}
          onKeyDown={onKeyDownHandler(() => {
            handleCopy();
          })}
        >
          {isCopied ? <CheckIcon /> : <CopyIcon />}
        </span>
      </div>
      <div className={styles.description}>{description}</div>
    </Section>
  );
};

export default Endpoint;
