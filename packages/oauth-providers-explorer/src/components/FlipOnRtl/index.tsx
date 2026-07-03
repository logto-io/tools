import classNames from 'classnames';
import { cloneElement, isValidElement, type ReactElement } from 'react';

import { useToolDirection } from '../../i18n';

import styles from './index.module.scss';

type Props = {
  readonly children: ReactElement<HTMLElement>;
};

/**
 * This component flips its child element horizontally if the host-provided text direction is RTL
 * (right-to-left).
 */
function FlipOnRtl({ children }: Props) {
  const direction = useToolDirection();
  const isRtl = direction === 'rtl';

  if (!isValidElement(children)) {
    return children;
  }

  return cloneElement(children, {
    className: classNames(children.props.className, isRtl && styles.flip),
  });
}

export default FlipOnRtl;
