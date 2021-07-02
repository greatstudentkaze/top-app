import React from 'react';
import cn from 'classnames';

import Menu from './menu';

import { SidebarProps } from './index.props';
import styles from './index.module.css';

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
