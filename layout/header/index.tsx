import React from 'react';
import cn from 'classnames';

import { HeaderProps } from './index.props';
import styles from './index.module.css';

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <header {...props}>
      header
    </header>
  );
};

export default Header;
