import classNames from 'classnames';
import { type ReactNode, type CSSProperties, type PropsWithChildren } from 'react';

import styles from './index.module.scss';

type Props = {
  readonly className?: string;
  readonly lightTheme?: boolean;
  readonly style?: CSSProperties;
  readonly append?: ReactNode;
};

const Section = ({ className, lightTheme, children, style, append }: PropsWithChildren<Props>) => {
  return (
    <section
      className={classNames(styles.section, lightTheme && styles.light, className)}
      style={style}
    >
      <div className={styles.contentWrapper}>{children}</div>
      {append}
    </section>
  );
};

export default Section;
