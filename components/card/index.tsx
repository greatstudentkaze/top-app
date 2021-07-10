import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import { CardProps } from './index.props';
import styles from './index.module.css';

const Card = forwardRef(({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div className={cn(className, styles.card, styles[color])} ref={ref} {...props}>
      {children}
    </div>
  );
});

export default Card;
