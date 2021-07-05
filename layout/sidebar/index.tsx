import React from 'react';
import cn from 'classnames';

import Menu from './menu';
import { Search } from '../../components';

import { SidebarProps } from './index.props';
import styles from './index.module.css';
import Logo from '../logo.svg';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  );
};

export default Sidebar;
