import { useState, type ChangeEvent } from 'react';

import CloseIcon from '../../assets/cross.svg?react';
import SearchIcon from '../../assets/search.svg?react';

import styles from './index.module.scss';

type Props = {
  readonly onChange: (keyword: string) => void;
  readonly placeholder?: string;
  readonly value?: string;
};

const SearchInput = ({ onChange, placeholder, value }: Props) => {
  const [isClearable, setIsClearable] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setIsClearable(!!event.target.value);
  };

  const handleClear = () => {
    onChange('');
    setIsClearable(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchWrapper}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {isClearable && <CloseIcon className={styles.clearIcon} onClick={handleClear} />}
      </div>
    </div>
  );
};

export default SearchInput;
