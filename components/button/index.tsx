import React from 'react';
import cn from 'classnames';

import { ButtonProps } from './index.props';
import styles from './index.module.css';
import ArrowIcon from './arrow.svg';

const Button = ({ appearance, arrowDirection, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.ghost]: appearance === 'ghost',
      })}
      type="button"
      {...props}
    >
      {children}
      {arrowDirection && <span className={cn(styles.arrow, {
        [styles.down]: arrowDirection === 'down'
      })}>
        <ArrowIcon />
      </span>}
    </button>
  );
};

export default Button;
