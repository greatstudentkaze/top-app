import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';

import { AppContext } from '../../../context/app.context';
import { PageItem } from '../../../interfaces/menu.interface';
import { firstLevelMenu } from '../../../helpers';

import styles from './index.module.css';
import firstLevelStyles from './first-level-menu.module.css';
import secondLevelStyles from './second-level-menu.module.css';
import thirdLevelStyles from './third-level-menu.module.css';

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    visible: {
      paddingTop: 8,
      paddingBottom: 5,
      transition: shouldReduceMotion ? {} : {
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
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    },
  };

  const openSecondLevelItemBlock = (secondCategory: string) => {
    if (!setMenu) {
      return;
    }

    const newMenu = menu.map(item => {
      if (item._id.secondCategory === secondCategory) {
        setAnnounce(item.isOpened ? 'closed' : 'opened');
        item.isOpened = !item.isOpened;
      }

      return item;
    });

    setMenu(newMenu);
  };

  const buildFirstLevel = () => (
    <ul>
      {firstLevelMenu.map(item => {
        const isActive = item.id === firstCategory;

        return (
          <li className={cn(firstLevelStyles.firstLevelItem, {
            [firstLevelStyles.firstLevelItemActive]: isActive,
          })} key={item.route} aria-expanded={isActive}>
            <Link href={`/${item.route}`}>
              <a>
                {item.icon}
                {item.name}
              </a>
            </Link>
            {isActive &&  buildSecondLevel(item.route)}
          </li>
        );
      })}
    </ul>
  );

  const buildSecondLevel = (route: string) => (
    <ul>
      {menu.map(item => {
        const pageAliases = item.pages.map(page => page.alias);
        const thirdCategory = router.asPath.split('/')[2];
        if (pageAliases.includes(thirdCategory)) {
          item.isOpened = true;
        }

        return (
          <li className={secondLevelStyles.secondLevelItem} key={item._id.secondCategory}>
            <button type="button" onClick={() => openSecondLevelItemBlock(item._id.secondCategory)} aria-expanded={item.isOpened}>
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

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened = false) => (
    pages.map(page => {
      const path = `/${route}/${page.alias}`;
      const isActive = path === router.asPath;

      return (
        <motion.li key={page._id} className={cn(thirdLevelStyles.thirdLevelItem, {
          [thirdLevelStyles.thirdLevelItemActive]: isActive,
        })} variants={thirdLevelItemVariants}>
          <Link href={path}>
            <a tabIndex={isOpened ? 0 : -1} aria-current={isActive ? 'page': false}>
              {page.category}
            </a>
          </Link>
        </motion.li>
      );
    })
  );

  return (
    <nav className={styles.menu} role="navigation">
      {announce && <p className="visually-hidden" role="log">
        {announce === 'opened' ? 'развернуто' : 'свернуто'}
      </p>}
      {buildFirstLevel()}
    </nav>
  );
};

export default Menu;
