import classNames from 'classnames';
import { type PropsWithChildren } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { toolRoutes } from '../routes';

import styles from './AppShell.module.scss';

const AppShell = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/jwt-decoder">
            Logto Tools
          </Link>
          <nav className={styles.nav}>
            {toolRoutes.map((route) => {
              const disabled = 'disabled' in route && route.disabled;

              return (
                <span
                  key={route.id}
                  className={classNames(styles.navItem, disabled && styles.disabled)}
                >
                  {disabled ? (
                    route.title
                  ) : (
                    <NavLink
                      to={route.path}
                      className={({ isActive }) => classNames(isActive && styles.active)}
                    >
                      {route.title}
                    </NavLink>
                  )}
                </span>
              );
            })}
          </nav>
        </div>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default AppShell;
