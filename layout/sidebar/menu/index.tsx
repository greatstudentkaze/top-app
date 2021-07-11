import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { motion } from 'framer-motion';

import { AppContext } from '../../../context/app.context';
import { PageItem } from '../../../interfaces/menu.interface';
import { firstLevelMenu } from '../../../helpers';

import styles from './index.module.css';
import firstLevelStyles from './first-level-menu.module.css';
import secondLevelStyles from './second-level-menu.module.css';
import thirdLevelStyles from './third-level-menu.module.css';

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      paddingTop: 8,
      paddingBottom: 5,
      transition: {
        staggerChildren: 0.02,
      }
    },
    hidden: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  };

  const thirdLevelItemVariants = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

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
          <li className={cn(firstLevelStyles.firstLevelItem, {
            [firstLevelStyles.firstLevelItemActive]: item.id === firstCategory,
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
            <li className={secondLevelStyles.secondLevelItem} key={item._id.secondCategory}>
              <button type="button" onClick={() => openSecondLevelItemBlock(item._id.secondCategory)}>
                {item._id.secondCategory}
              </button>
              <motion.ul
                className={secondLevelStyles.secondLevelItemBlock}
                variants={variants}
                initial={item.isOpened ? 'visible' : 'hidden'}
                animate={item.isOpened ? 'visible' : 'hidden'}
                layout
              >
                {buildThirdLevel(item.pages, route, item.isOpened)}
              </motion.ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened = false) => {
    return (
      pages.map(page => {
        const path = `/${route}/${page.alias}`;

        return (
          <motion.li key={page._id} className={cn(thirdLevelStyles.thirdLevelItem, {
            [thirdLevelStyles.thirdLevelItemActive]: path === router.asPath,
          })} variants={thirdLevelItemVariants}>
            <Link href={path}>
              <a tabIndex={isOpened ? 0 : -1}>{page.category}</a>
            </Link>
          </motion.li>
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
