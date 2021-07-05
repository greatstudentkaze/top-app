import React, { useReducer } from 'react';

import { Advantages, HeadHunterData, HeadingTag, Input, Skills, Sort, Tag, Textarea } from '../../components';

import { SortTypeEnum } from '../../components/sort/index.props';
import { TopLevelCategory } from '../../interfaces/page.interface';

import { TopPageComponentProps } from './index.props';
import styles from './index.module.css';
import { sortReducer } from './sort.reducer';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sortType }, dispatchSort] = useReducer(sortReducer, { products, sortType: SortTypeEnum.Rating });

  const setSortType = (sortType: SortTypeEnum) => {
    dispatchSort({ type: sortType });
  };

  return (
    <>
      <header className={styles.header}>
        <HeadingTag level="1">{page.title}</HeadingTag>
        {products.length && <Tag color="gray" size="medium">{products.length}</Tag>}
        <Sort className={styles.sort} sortType={sortType} setSortType={setSortType} />
      </header>

      <ul>
        {sortedProducts.length && sortedProducts.map(product => <li key={product._id}>{product.title}</li>)}
      </ul>

      <Input placeholder="Имя" />
      <Input placeholder="Заголовок отзыва" />
      <Textarea placeholder="Текст отзыва" />

      <div className={styles.titleWithTag}>
        <HeadingTag level="2">Вакансии - {page.category}</HeadingTag>
        <Tag color="red" size="small">hh.ru</Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && page.hh && <HeadHunterData {...page.hh} />}

      {page.advantages && page.advantages.length > 0 && <Advantages advantages={page.advantages} />}

      {page.seoText && <div className={styles.seoText} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

      {page.tags.length > 0 && <Skills skills={page.tags} />}
    </>
  );
};

export default TopPageComponent;
