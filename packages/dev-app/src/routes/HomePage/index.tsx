import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { toolRoutes } from '..';
import { usePhrases } from '../../i18n';

import styles from './index.module.scss';

const HomePage = () => {
  const { t } = usePhrases('dev_app');

  return (
    <section className={styles.page}>
      <div className={styles.content}>
        <div className={styles.label}>{t('home.label')}</div>
        <div className={styles.hero}>
          <div>
            <h1 className={styles.title}>{t('home.title')}</h1>
            <p className={styles.description}>{t('home.description')}</p>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>{t('home.tags.topbar')}</span>
            <span className={styles.tag}>{t('home.tags.routes')}</span>
            <span className={styles.tag}>{t('home.tags.i18n')}</span>
          </div>
        </div>
        <div className={styles.grid}>
          {toolRoutes.map((route) => {
            const disabled = 'disabled' in route && route.disabled;

            if (disabled) {
              return (
                <article key={route.id} className={classNames(styles.card, styles.cardDisabled)}>
                  <div className={styles.cardEyebrow}>{t('home.planned')}</div>
                  <div className={styles.cardTitle}>{t(route.titleKey)}</div>
                  <p className={styles.cardDescription}>{t(route.descriptionKey)}</p>
                  <div className={styles.cardFooter}>{t('home.coming_next')}</div>
                </article>
              );
            }

            return (
              <Link key={route.id} className={styles.card} to={route.path}>
                <div className={styles.cardEyebrow}>{t('home.available_now')}</div>
                <div className={styles.cardTitle}>{t(route.titleKey)}</div>
                <p className={styles.cardDescription}>{t(route.descriptionKey)}</p>
                <div className={styles.cardFooter}>{t('home.open_tool')}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
