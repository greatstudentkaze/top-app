import React from 'react';
import cn from 'classnames';

import { TextareaProps } from './index.props';
import styles from './index.module.css';

const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
  return <textarea className={cn(className, styles.textarea)} {...props} />;
};

export default Textarea;
