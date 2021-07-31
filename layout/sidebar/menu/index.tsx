import React, { useState } from 'react';

import styles from './index.module.css';
import FirstLevelMenu from './first-level-menu';

const Menu = (): JSX.Element => {
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();

  return (
    <nav className={styles.menu} role="navigation">
      {announce && (
        <p className="visually-hidden" role="log">
          {announce === 'opened' ? 'развернуто' : 'свернуто'}
        </p>
      )}
      <FirstLevelMenu setAnnounce={setAnnounce} />
    </nav>
  );
};

export default Menu;
