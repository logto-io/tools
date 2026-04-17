import { Button } from '@logto/website-ui-foundation';
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
      toast.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className={styles.actionBar}>
      <Button type="primary" disabled={output === ''} onClick={onCopy}>
        {t('copy')}
      </Button>
    </div>
  );
};

export default ActionBar;
