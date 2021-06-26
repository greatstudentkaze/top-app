import React from 'react';
import cn from 'classnames';

import { TagProps } from './index.props';
import styles from './index.module.css';

const Tag = ({ size = 'medium', color = 'ghost', href, children, className, ...props }: TagProps): JSX.Element => {
  return <div className={cn(styles.tag, className, styles[size], styles[color])} {...props}>
    {
      href ? <a href={href}>{children}</a> : children
    }
  </div>;
};

export default Tag;
