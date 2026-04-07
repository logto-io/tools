import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import CloseIcon from '../assets/cross.svg?react';
import GitHubIcon from '../assets/github.svg?react';
import MenuIcon from '../assets/hamburger.svg?react';
import logo from '../assets/logo.webp';
import { languageTitles, languages, type Language, usePhrases } from '../i18n';
import { toolRoutes } from '../routes';

import styles from './WebsiteTopbar.module.scss';

const availableTools = toolRoutes.filter((route) => !('disabled' in route));
const desktopDropdownDelay = 200;

type Props = {
  readonly currentLanguage: Language;
  readonly onLanguageChange: (language: Language) => void;
};

const WebsiteTopbar = ({ currentLanguage, onLanguageChange }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileViewportHeight, setMobileViewportHeight] = useState(0);
  const toolsRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const openTimeoutRef = useRef<number>();
  const closeTimeoutRef = useRef<number>();
  const location = useLocation();
  const { t } = usePhrases('dev_app');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      setMobileViewportHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // eslint-disable-next-line @silverhand/fp/no-mutation
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';

    return () => {
      // eslint-disable-next-line @silverhand/fp/no-mutation
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const { target } = event;

      if (target instanceof Node && !toolsRef.current?.contains(target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('mousedown', onPointerDown);

    return () => {
      window.removeEventListener('mousedown', onPointerDown);
    };
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(openTimeoutRef.current);
      window.clearTimeout(closeTimeoutRef.current);
    },
    []
  );

  const scheduleOpenDropdown = () => {
    window.clearTimeout(closeTimeoutRef.current);
    // eslint-disable-next-line @silverhand/fp/no-mutation
    openTimeoutRef.current = window.setTimeout(() => {
      setIsDropdownOpen(true);
    }, desktopDropdownDelay);
  };

  const scheduleCloseDropdown = () => {
    window.clearTimeout(openTimeoutRef.current);
    // eslint-disable-next-line @silverhand/fp/no-mutation
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, desktopDropdownDelay);
  };

  const onLanguageSelectChange = (value: string) => {
    const language = languages.find((item) => item === value);

    if (!language) {
      return;
    }

    onLanguageChange(language);
  };

  return (
    <>
      {isMenuOpen && (
        <button
          className={styles.overlay}
          type="button"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        />
      )}
      <div
        className={classNames(
          styles.container,
          (isScrolled || isMenuOpen) && styles.scrolled,
          isMenuOpen && styles.showMenuItems
        )}
      >
        <div className={styles.topBarBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.bannerText}>{t('topbar.banner_text')}</span>
            <Link className={styles.bannerLink} to="/">
              {t('topbar.banner_link')}
            </Link>
          </div>
        </div>
        <header className={styles.topbar}>
          <div ref={wrapperRef} className={styles.wrapper}>
            <Link className={styles.logoLink} to="/">
              <img className={styles.logo} src={logo} alt="Logto logo" />
            </Link>
            <nav className={styles.navigation} aria-label="Website navigation">
              <div
                ref={toolsRef}
                className={styles.dropdownItem}
                onMouseEnter={scheduleOpenDropdown}
                onMouseLeave={scheduleCloseDropdown}
              >
                <button
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  className={classNames(styles.navButton, isDropdownOpen && styles.activeNavButton)}
                  type="button"
                  onClick={() => {
                    window.clearTimeout(openTimeoutRef.current);
                    window.clearTimeout(closeTimeoutRef.current);
                    setIsDropdownOpen((open) => !open);
                  }}
                >
                  {t('topbar.developers')}
                </button>
                <div
                  className={classNames(styles.dropdownContent, isDropdownOpen && styles.open)}
                  aria-hidden={!isDropdownOpen}
                >
                  <div className={styles.dropdownPanel}>
                    <div className={styles.dropdownLabel}>{t('topbar.tools')}</div>
                    <div className={styles.dropdownItems}>
                      {availableTools.map((route) => (
                        <NavLink
                          key={route.id}
                          to={route.path}
                          className={({ isActive }) =>
                            classNames(styles.dropdownEntry, isActive && styles.activeEntry)
                          }
                          onClick={() => {
                            setIsDropdownOpen(false);
                          }}
                        >
                          <span>{t(route.titleKey)}</span>
                          <span className={styles.entryDescription}>{t(route.descriptionKey)}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className={styles.actions}>
              <label className={styles.languageField}>
                <span className={styles.languageLabel}>{t('topbar.language')}</span>
                <select
                  aria-label={t('topbar.language')}
                  className={styles.languageSelect}
                  value={currentLanguage}
                  onChange={({ currentTarget }) => {
                    onLanguageSelectChange(currentTarget.value);
                  }}
                >
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {languageTitles[language]}
                    </option>
                  ))}
                </select>
              </label>
              <span className={styles.githubButton} aria-disabled="true">
                <GitHubIcon className={styles.githubIcon} />
                {t('topbar.github_star')}
              </span>
              <span className={classNames(styles.cta, styles.secondaryCta)} aria-disabled="true">
                {t('topbar.sign_in')}
              </span>
              <span className={classNames(styles.cta, styles.primaryCta)} aria-disabled="true">
                {t('topbar.get_started')}
              </span>
            </div>
            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className={styles.mobileToggle}
              type="button"
              onClick={() => {
                setIsMenuOpen((open) => !open);
              }}
            >
              {isMenuOpen ? (
                <CloseIcon className={styles.mobileIcon} />
              ) : (
                <MenuIcon className={styles.mobileIcon} />
              )}
            </button>
          </div>
          {isMenuOpen && (
            <div
              className={styles.mobilePanel}
              style={{
                height: mobileViewportHeight
                  ? `${mobileViewportHeight - (wrapperRef.current?.clientHeight ?? 0)}px`
                  : undefined,
              }}
            >
              <label className={styles.mobileLanguageField}>
                <span className={styles.languageLabel}>{t('topbar.language')}</span>
                <select
                  aria-label={t('topbar.language')}
                  className={styles.languageSelect}
                  value={currentLanguage}
                  onChange={({ currentTarget }) => {
                    onLanguageSelectChange(currentTarget.value);
                  }}
                >
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {languageTitles[language]}
                    </option>
                  ))}
                </select>
              </label>
              {availableTools.map((route) => (
                <NavLink
                  key={route.id}
                  to={route.path}
                  className={({ isActive }) =>
                    classNames(styles.mobileItem, isActive && styles.active)
                  }
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  {t(route.titleKey)}
                </NavLink>
              ))}
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default WebsiteTopbar;
