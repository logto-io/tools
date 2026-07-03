import { type ReactNode } from 'react';

import styles from './index.module.scss';

type Props = {
  readonly title: string;
  readonly children: ReactNode;
};

const Section = ({ title, children }: Props) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Section;
