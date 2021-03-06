import React, { useEffect, useReducer } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { Advantages, HeadHunterData, HeadingTag, Product, Skills, Sort, Tag } from '../../components';

import { SortTypeEnum } from '../../components/sort/index.props';
import { TopLevelCategory } from '../../interfaces/page.interface';

import { TopPageComponentProps } from './index.props';
import styles from './index.module.css';
import { sortReducer } from './sort.reducer';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sortType }, dispatchSort] = useReducer(sortReducer, { products, sortType: SortTypeEnum.Rating });
  const shouldReduceMotion = useReducedMotion();

  const setSortType = (sortType: SortTypeEnum) => {
    dispatchSort({ type: sortType });
  };

  useEffect(() => {
    dispatchSort({ type: 'RESET', payload: products });
  }, [products]);

  return (
    <>
      <header className={styles.header}>
        <HeadingTag level="1">{page.title}</HeadingTag>
        {products.length > 0 && <Tag color="gray" size="medium" aria-label={`${products.length} элементов`}>{products.length}</Tag>}
        <Sort className={styles.sort} sortType={sortType} setSortType={setSortType} />
      </header>

      <ul className={styles.productList}>
        {sortedProducts.length > 0 && sortedProducts.map(product => <motion.li key={product._id} layout={!shouldReduceMotion}>
          <Product data={product} />
        </motion.li>)}
      </ul>

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
