import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import { InputProps } from './index.props';
import styles from './index.module.css';

const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <input className={cn(styles.input, {
        [styles.error]: error,
      })} ref={ref} {...props} />
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
});

export default Input;
