import classNames from 'classnames';
import type { CSSProperties, ReactNode, RefObject } from 'react';
import { useEffect, useRef } from 'react';

import { usePosition } from '../../hooks/use-position';
import type { HorizontalAlignment } from '../../hooks/use-position';
import { onKeyDownHandler } from '../../utils/a11y';

import styles from './index.module.scss';

export { default as DropdownItem } from './DropdownItem';

type Props = {
  readonly children: ReactNode;
  readonly isOpen: boolean;
  readonly style?: CSSProperties;
  readonly onClose?: () => void;
  readonly anchorRef: RefObject<HTMLElement>;
  readonly isFullWidth?: boolean;
  readonly className?: string;
  readonly horizontalAlign?: HorizontalAlignment;
};

const Dropdown = ({
  children,
  isOpen,
  style,
  onClose,
  anchorRef,
  isFullWidth,
  className,
  horizontalAlign = 'end',
}: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const { position, positionState, mutate } = usePosition({
    verticalAlign: 'bottom',
    horizontalAlign,
    offset: { vertical: -4, horizontal: 0 },
    anchorRef,
    overlayRef,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onPointerDown = (event: MouseEvent) => {
      const { target } = event;

      if (
        target instanceof Node &&
        !overlayRef.current?.contains(target) &&
        !anchorRef.current?.contains(target)
      ) {
        onClose?.();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    mutate();
    window.addEventListener('mousedown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [anchorRef, isOpen, mutate, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div
        ref={overlayRef}
        className={classNames(
          styles.content,
          positionState.verticalAlign === 'top' && styles.onTop
        )}
        style={{
          width:
            isFullWidth && anchorRef.current
              ? anchorRef.current.getBoundingClientRect().width
              : undefined,
          ...style,
          ...position,
        }}
      >
        <ul
          className={classNames(styles.list, className)}
          role="menu"
          tabIndex={0}
          onClick={onClose}
          onKeyDown={onKeyDownHandler({ Enter: onClose, Esc: onClose })}
        >
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
