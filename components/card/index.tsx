import React from 'react';
import cn from 'classnames';

import { CardProps } from './index.props';
import styles from './index.module.css';

const Card = ({ color = 'white', children, className, ...props }: CardProps): JSX.Element => {
  return <div className={cn(className, styles.card, styles[color])} {...props}>
    {children}
  </div>;
};

export default Card;
