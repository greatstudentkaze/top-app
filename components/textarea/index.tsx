import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import { TextareaProps } from './index.props';
import styles from './index.module.css';

const Textarea = forwardRef(({ className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return <textarea className={cn(className, styles.textarea)} ref={ref} {...props} />;
});

export default Textarea;
