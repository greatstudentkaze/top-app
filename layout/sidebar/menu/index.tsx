import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { AppContext } from '../../../context/app.context';
import { PageItem } from '../../../interfaces/menu.interface';
import { firstLevelMenu } from '../../../helpers';

import styles from './index.module.css';

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevelItemBlock = (secondCategory: string) => {
    if (!setMenu) {
      return;
    }

    const newMenu = menu.map(item => {
      if (item._id.secondCategory === secondCategory) {
        item.isOpened = !item.isOpened;
      }

      return item;
    });

    setMenu(newMenu);
  };

  const buildFirstLevel = () => {
    return (
      <ul>
        {firstLevelMenu.map(item => (
          <li className={cn(styles.firstLevelItem, {
            [styles.firstLevelItemActive]: item.id === firstCategory,
          })} key={item.route}>
            <Link href={`/${item.route}`}>
              <a>
                {item.icon}
                {item.name}
              </a>
            </Link>
            {item.id === firstCategory &&  buildSecondLevel(item.route)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (route: string) => {
    return (
      <ul>
        {menu.map(item => {
          const pageAliases = item.pages.map(page => page.alias);
          const thirdCategory = router.asPath.split('/')[2];
          if (pageAliases.includes(thirdCategory)) {
            item.isOpened = true;
          }

          return (
            <li className={styles.secondLevelItem} key={item._id.secondCategory}>
              <button type="button" onClick={() => openSecondLevelItemBlock(item._id.secondCategory)}>
                {item._id.secondCategory}
              </button>
              <ul className={cn(styles.secondLevelItemBlock, {
                [styles.secondLevelItemBlockOpened]: item.isOpened,
              })}>
                {buildThirdLevel(item.pages, route)}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(page => {
        const path = `/${route}/${page.alias}`;

        return (
          <li key={page._id} className={cn(styles.thirdLevelItem, {
            [styles.thirdLevelItemActive]: path === router.asPath,
          })}>
            <Link href={path}>
              <a>{page.category}</a>
            </Link>
          </li>
        );
      })
    );
  };

  return (
    <nav className={styles.menu}>
      {buildFirstLevel()}
    </nav>
  );
};

export default Menu;
