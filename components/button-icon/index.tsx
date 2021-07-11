import React from 'react';
import cn from 'classnames';

import { ButtonIconProps, Icon } from './index.props';
import styles from './index.module.css';

const ButtonIcon = ({ appearance, icon, className, ...props }: ButtonIconProps): JSX.Element => {
  const IconComponent = Icon[icon];

  return (
    <button
      className={cn(styles.button, className, {
        [styles.white]: appearance === 'white',
      })}
      type="button"
      {...props}
    >
      <IconComponent />
    </button>
  );
};

export default ButtonIcon;
