import React, { useContext } from 'react';
import cn from 'classnames';

import { AppContext } from '../../../context/app.context';

import styles from './index.module.css';

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <nav>
      <ul>
        {menu.map(it => <li key={it._id.secondCategory}>{it._id.secondCategory}</li>)}
      </ul>
    </nav>
  );
};

export default Menu;
