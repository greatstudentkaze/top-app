import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import { InputProps } from './index.props';
import styles from './index.module.css';

const Input = forwardRef(({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return <input className={cn(className, styles.input)} ref={ref} {...props} />;
});

export default Input;
