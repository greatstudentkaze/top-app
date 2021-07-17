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
      const isSelected = sortType === type;
      const className = cn({ [styles.active]: isSelected });
      const itemId = `sort-item-${type}`;

      return (
        <a
          href={`#${type}`}
          key={i}
          id={itemId}
          className={className}
          onClick={(evt) => { evt.preventDefault(); setSortType(type);}}
          aria-selected={isSelected}
          aria-labelledby={`sort ${itemId}`}>
          <SortIcon className={styles.icon} />
          {text}
        </a>
      );
    })
  );

  return <div className={cn(className, styles.sort)} {...props}>
    <p id="sort" style={{ display: 'none' }}>Сортировка</p>
    {buildSortItems()}
  </div>;
};

export default Sort;
