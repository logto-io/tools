import classNames from 'classnames';
import { type PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

import WebsiteTopbar from '../components/WebsiteTopbar';
import { type Language } from '../i18n';

import styles from './AppShell.module.scss';

type Props = PropsWithChildren<{
  readonly currentLanguage: Language;
  readonly onLanguageChange: (language: Language) => void;
}>;

const AppShell = ({ children, currentLanguage, onLanguageChange }: Props) => {
  const { pathname } = useLocation();

  return (
    <div className={styles.page}>
      <WebsiteTopbar currentLanguage={currentLanguage} onLanguageChange={onLanguageChange} />
      <main className={classNames(styles.main, pathname === '/' && styles.homeMain)}>
        {children}
      </main>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default AppShell;
