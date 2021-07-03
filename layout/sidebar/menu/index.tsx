import React, { useContext } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import { AppContext } from '../../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../../interfaces/menu.interface';
import { TopLevelCategory } from '../../../interfaces/page.interface';

import styles from './index.module.css';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

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
        {menu.map(item => (
          <li className={styles.secondLevelItem} key={item._id.secondCategory}>
            <button type="button">{item._id.secondCategory}</button>
            <ul className={cn(styles.secondLevelItemBlock, {
              [styles.secondLevelItemBlockOpened]: item.isOpened,
            })}>
              {buildThirdLevel(item.pages, route)}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(page => <li key={page._id} className={cn(styles.thirdLevelItem, {
        [styles.thirdLevelItemActive]: false,
        // todo: remove false
      })}>
        <Link href={`/${route}/${page.alias}`}>
          <a>{page.category}</a>
        </Link>
      </li>
      )
    );
  };

  return (
    <nav className={styles.menu}>
      {buildFirstLevel()}
    </nav>
  );
};

export default Menu;
