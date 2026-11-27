import { toast } from 'react-hot-toast';

import { usePhrases } from '../../i18n';

import styles from './index.module.scss';

type Props = {
  readonly output: string;
};

const ActionBar = ({ output }: Props) => {
  const { t } = usePhrases();

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      toast.success(t('copy_to_clipboard'));
    } catch {
      toast.error(t('copy_failed'));
    }
  };

  return (
    <div className={styles.actionBar}>
      <button type="button" className={styles.copyButton} disabled={output === ''} onClick={onCopy}>
        {t('copy')}
      </button>
    </div>
  );
};

export default ActionBar;
