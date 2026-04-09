import { Button, Dropdown, DropdownItem } from '@logto/website-ui-foundation';
import { useState, useRef, useCallback } from 'react';

import ArrowDown from '../../assets/arrow-down.svg?react';
import { usePhrases } from '../../i18n';
import { Algorithm } from '../../keys';

import styles from './index.module.scss';
import useActions from './use-actions';

const ActionBar = () => {
  const { t } = usePhrases('jwt_decoder');
  const [showDropdown, setShowDropdown] = useState(false);
  const examplesButtonRef = useRef(null);
  const { setJwtExample, onShareUrl } = useActions();

  const onCloseDropdown = useCallback(() => {
    setShowDropdown(false);
  }, []);

  return (
    <div className={styles.actionBar}>
      <Button
        buttonRef={examplesButtonRef}
        className={styles.examplesButton}
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        {t('jwt_examples')} <ArrowDown />
      </Button>
      <Button type="primary" onClick={onShareUrl}>
        {t('share_jwt')}
      </Button>
      <Dropdown
        isFullWidth
        className={styles.examplesDropdown}
        isOpen={showDropdown}
        anchorRef={examplesButtonRef}
        onClose={onCloseDropdown}
      >
        {Object.values(Algorithm).map((algorithm) => (
          <DropdownItem
            key={algorithm}
            onClick={() => {
              void setJwtExample(algorithm);
            }}
          >
            {algorithm}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
};

export default ActionBar;
