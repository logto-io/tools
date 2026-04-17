import classNames from 'classnames';
import { type ChangeEventHandler } from 'react';

import styles from './index.module.scss';

type Props = {
  readonly title: string;
  readonly value: string;
  readonly placeholder?: string;
  readonly isReadOnly?: boolean;
  readonly isInvalid?: boolean;
  readonly onChange?: (value: string) => void;
};

const TextPane = ({ title, value, placeholder, isReadOnly, isInvalid, onChange }: Props) => {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={styles.pane}>
      <div className={styles.title}>{title}</div>
      <textarea
        spellCheck={false}
        className={classNames(
          styles.textarea,
          isReadOnly && styles.readOnly,
          isInvalid && styles.invalid
        )}
        readOnly={isReadOnly}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextPane;
