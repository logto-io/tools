import classNames from 'classnames';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { useEffect, useMemo, useState } from 'react';

import styles from './index.module.scss';

type CommonProps = {
  readonly href?: string;
  readonly className?: string;
  readonly children?: React.ReactNode;
  readonly type?: 'primary' | 'gradient' | 'secondary' | 'outline' | 'plain';
  readonly size?: 'small' | 'medium' | 'large';
  readonly isLoading?: boolean;
  readonly loadingDelay?: number;
  readonly buttonRef?: React.Ref<HTMLButtonElement>;
};

type ButtonProps = CommonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;
type LinkProps = CommonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type'>;

type Props = ButtonProps & LinkProps;

const isAbsoluteUrl = (url?: string) => Boolean(url && /^(?:[a-z]+:)?\/\//iu.test(url));
const isExternalUrl = (url?: string) => Boolean(url && /^https?:\/\//iu.test(url));

const Button = ({
  className,
  children,
  href,
  isLoading = false,
  loadingDelay = 500,
  size = 'medium',
  target = isExternalUrl(href) ? '_blank' : '_self',
  type = 'outline',
  buttonRef,
  ...rest
}: Props) => {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowSpinner(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setShowSpinner(true);
    }, loadingDelay);

    return () => {
      clearTimeout(timer);
      setShowSpinner(false);
    };
  }, [isLoading, loadingDelay]);

  const sharedClassName = useMemo(
    () =>
      classNames(styles.button, styles[type], styles[size], isLoading && styles.loading, className),
    [className, isLoading, size, type]
  );

  const content = (
    <>
      {showSpinner && <span aria-hidden className={styles.spinner} />}
      <span className={styles.children}>{children}</span>
    </>
  );

  if (!href) {
    return (
      <button {...rest} ref={buttonRef} className={sharedClassName}>
        {content}
      </button>
    );
  }

  const anchorProps = {
    ...rest,
    href,
    target,
    rel: isExternalUrl(href) ? 'noopener' : undefined,
    className: sharedClassName,
  };

  return <a {...anchorProps}>{content}</a>;
};

export default Button;
