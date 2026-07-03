import { useMemo, useState } from 'react';

import ShieldIcon from '../assets/shield.svg?react';
import NotFound from '../components/NotFound';
import { usePhrases } from '../i18n';
import { searchProviders } from '../provider-data';

import ProviderItem from './ProviderItem';
import SearchInput from './SearchInput';
import styles from './index.module.scss';

type Props = {
  readonly buildProviderDetailsUrl: (id: string) => string;
};

const ProviderList = ({ buildProviderDetailsUrl }: Props) => {
  const [keyword, setKeyword] = useState('');
  const { t } = usePhrases();
  const providers = useMemo(() => searchProviders(keyword), [keyword]);

  return (
    <>
      <div className={styles.hint}>
        <ShieldIcon className={styles.shieldIcon} />
        {t('hint')}
      </div>
      <SearchInput value={keyword} placeholder={t('search_placeholder')} onChange={setKeyword} />
      {providers.length === 0 && <NotFound />}
      {providers.length > 0 && (
        <div className={styles.list}>
          {providers.map((provider) => (
            <ProviderItem
              key={provider.id}
              data={provider}
              buildProviderDetailsUrl={buildProviderDetailsUrl}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProviderList;
