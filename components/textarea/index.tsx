import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

import { TextareaProps } from './index.props';
import styles from './index.module.css';

// todo: combine with input component
const Textarea = forwardRef(({ className, error, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <textarea className={cn(styles.textarea, {
        [styles.error]: error,
      })} ref={ref} {...props} />
      {error && <p className={styles.errorMessage} role="alert">{error.message}</p>}
    </div>
  );
});

export default Textarea;
