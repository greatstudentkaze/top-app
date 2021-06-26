import React from 'react';
import cn from 'classnames';

import { ButtonProps } from './index.props';
import styles from './index.module.css';

const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.ghost]: appearance === 'ghost',
      })}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
