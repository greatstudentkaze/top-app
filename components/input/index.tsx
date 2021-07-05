import React from 'react';
import cn from 'classnames';

import { InputProps } from './index.props';
import styles from './index.module.css';

const Input = ({ className, ...props }: InputProps): JSX.Element => {
  return <input className={cn(className, styles.input)} {...props} />;
};

export default Input;
