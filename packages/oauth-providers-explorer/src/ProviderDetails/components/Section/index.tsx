import styles from './index.module.scss';

type Props = {
  readonly title: string;
  readonly children: React.ReactNode;
};

const Section = ({ title, children }: Props) => {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Section;
