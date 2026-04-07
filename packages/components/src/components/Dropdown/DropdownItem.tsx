import classNames from 'classnames';
import type { MouseEvent, KeyboardEvent, ReactNode, CSSProperties } from 'react';

import { onKeyDownHandler } from '../../utils/a11y';

import styles from './DropdownItem.module.scss';

type Props = {
  readonly onClick?: (event: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) => void;
  readonly className?: string;
  readonly children: ReactNode;
  readonly type?: 'default' | 'danger';
  readonly style?: CSSProperties;
};

const DropdownItem = ({ onClick, className, children, style, type = 'default' }: Props) => (
  <li
    role="menuitem"
    tabIndex={0}
    className={classNames(styles.item, styles[type], className)}
    style={style}
    onKeyDown={onKeyDownHandler(onClick)}
    onClick={onClick}
  >
    {children}
  </li>
);

export default DropdownItem;
