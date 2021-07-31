import React, { useContext } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useReducedMotion } from 'framer-motion';

import { AppContext } from '../../../../context/app.context';
import { PageItem } from '../../../../interfaces/menu.interface';

import styles from '../index.module.css';

interface SecondLevelMenuProps {
  route: string,
  setAnnounce: (state: 'closed' | 'opened') => void,
}

const SecondLevelMenu = ({ route, setAnnounce }: SecondLevelMenuProps): JSX.Element => {
  const { menu, setMenu } = useContext(AppContext);
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

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened = false) => (
    pages.map(page => {
      const path = `/${route}/${page.alias}`;
      const isActive = path === router.asPath;

      return (
        <motion.li key={page._id} className={cn(styles.thirdLevelItem, {
          [styles.thirdLevelItemActive]: isActive,
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
    <ul>
      {menu.map(item => {
        const pageAliases = item.pages.map(page => page.alias);
        const thirdCategory = router.asPath.split('/')[2];
        if (pageAliases.includes(thirdCategory)) {
          item.isOpened = true;
        }

        return (
          <li className={styles.secondLevelItem} key={item._id.secondCategory}>
            <button type="button" onClick={() => openSecondLevelItemBlock(item._id.secondCategory)} aria-expanded={item.isOpened}>
              {item._id.secondCategory}
            </button>
            <motion.ul
              className={styles.secondLevelItemBlock}
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

export default SecondLevelMenu;
