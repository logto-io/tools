import { Button, Tag } from '@logto/website-ui-foundation';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { toolRoutes } from '..';
import { usePhrases } from '../../i18n';

import styles from './index.module.scss';

const HomePage = () => {
  const { t } = usePhrases('dev_app');
  const firstAvailableRoute = toolRoutes.find((route) => !('disabled' in route));

  return (
    <section className={styles.page}>
      <div className={styles.content}>
        <div className={styles.label}>{t('home.label')}</div>
        <div className={styles.hero}>
          <div>
            <h1 className={styles.title}>{t('home.title')}</h1>
            <p className={styles.description}>{t('home.description')}</p>
            {firstAvailableRoute && (
              <Button className={styles.heroButton} href={firstAvailableRoute.path} type="primary">
                {t('home.open_tool')}
              </Button>
            )}
          </div>
          <div className={styles.tags}>
            <Tag className={styles.tag} text={t('home.tags.topbar')} />
            <Tag className={styles.tag} text={t('home.tags.routes')} />
            <Tag className={styles.tag} text={t('home.tags.i18n')} />
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
