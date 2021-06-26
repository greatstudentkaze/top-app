import React from 'react';

import { HeadingTagProps } from './index.props';
import styles from './index.module.css';

const HeadingTag = ({ level, children }: HeadingTagProps): JSX.Element => {
  switch (level) {
    case '1':
      return <h1 className={styles.h1}>{children}</h1>;
    case '2':
      return <h2 className={styles.h2}>{children}</h2>;
    case '3':
      return <h3 className={styles.h3}>{children}</h3>;
    default:
      return <></>;
  }
};

export default HeadingTag;
