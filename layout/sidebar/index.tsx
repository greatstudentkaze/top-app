import React from 'react';
import cn from 'classnames';

import { SidebarProps } from './index.props';
import styles from './index.module.css';

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      sidebar
    </div>
  );
};

export default Sidebar;
