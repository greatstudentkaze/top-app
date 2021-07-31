import { useContext } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { AppContext } from '../../../../context/app.context';
import { firstLevelMenu } from '../../../../helpers';

import styles from '../index.module.css';
import SecondLevelMenu from '../second-level-menu';

interface FirstLevelMenuProps {
  setAnnounce: (state: 'closed' | 'opened') => void,
}

const FirstLevelMenu = ({ setAnnounce }: FirstLevelMenuProps): JSX.Element => {
  const { firstCategory } = useContext(AppContext);

  return (
    <ul>
      {firstLevelMenu.map(item => {
        const isActive = item.id === firstCategory;

        return (
          <li className={cn(styles.firstLevelItem, {
            [styles.firstLevelItemActive]: isActive,
          })} key={item.route} aria-expanded={isActive}>
            <Link href={`/${item.route}`}>
              <a>
                {item.icon}
                {item.name}
              </a>
            </Link>
            {isActive &&  <SecondLevelMenu route={item.route} setAnnounce={setAnnounce} />}
          </li>
        );
      })}
    </ul>
  );
};

export default FirstLevelMenu;
