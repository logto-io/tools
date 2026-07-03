import { type ChangeEvent } from 'react';

import CloseIcon from '../../assets/cross.svg?react';
import SearchIcon from '../../assets/search.svg?react';
import { usePhrases } from '../../i18n';
import { onKeyDownHandler } from '../../utils/a11y';

import styles from './index.module.scss';

type Props = {
  readonly onChange: (keyword: string) => void;
  readonly placeholder?: string;
  readonly value?: string;
};

const SearchInput = ({ onChange, placeholder, value }: Props) => {
  const { t } = usePhrases();
  const isClearable = Boolean(value);
  // Fall back to the localized default so the input always has an accessible name.
  const resolvedPlaceholder = placeholder ?? t('search_placeholder');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          className={styles.input}
          placeholder={resolvedPlaceholder}
          aria-label={resolvedPlaceholder}
          value={value ?? ''}
          onChange={handleChange}
        />
        {isClearable && (
          <CloseIcon
            role="button"
            tabIndex={0}
            aria-label={t('clear_search')}
            className={styles.clearIcon}
            onClick={handleClear}
            onKeyDown={onKeyDownHandler(handleClear)}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInput;
