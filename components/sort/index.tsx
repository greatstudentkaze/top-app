import React from 'react';
import cn from 'classnames';

import { SortProps, SortTypeEnum } from './index.props';
import styles from './index.module.css';
import SortIcon from './sort.svg';

const sortItems = [
  { text: 'По рейтингу', type: SortTypeEnum.Rating },
  { text: 'По цене', type: SortTypeEnum.Price },
];

// todo: add query param to route
const Sort = ({ sortType, setSortType, className, ...props }: SortProps): JSX.Element => {
  const buildSortItems = () => (
    sortItems.map(({ text, type }, i) => {
      const className = cn({ [styles.active]: sortType === type });

      return <a key={i} className={className} onClick={() => setSortType(type)}>
        <SortIcon className={styles.icon} />
        {text}
      </a>;
    })
  );

  return <div className={cn(className, styles.sort)} {...props}>
    {buildSortItems()}
  </div>;
};

export default Sort;
