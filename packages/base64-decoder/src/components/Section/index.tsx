import classNames from 'classnames';
import { type ReactNode, type CSSProperties, type PropsWithChildren } from 'react';

import styles from './index.module.scss';

type Props = {
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly append?: ReactNode;
};

const Section = ({ className, children, style, append }: PropsWithChildren<Props>) => {
  return (
    <section className={classNames(styles.section, className)} style={style}>
      <div className={styles.contentWrapper}>{children}</div>
      {append}
    </section>
  );
};

export default Section;
