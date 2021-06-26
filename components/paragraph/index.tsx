import React from 'react';
import cn from 'classnames';

import { ParagraphProps } from './index.props';
import styles from './index.module.css';

const Paragraph = ({ size = 'medium', children, className, ...props }: ParagraphProps): JSX.Element => {
  return <p className={cn(styles.paragraph, className, styles[size])} {...props}>
    {children}
  </p>;
};

export default Paragraph;
