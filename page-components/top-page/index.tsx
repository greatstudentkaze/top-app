import React from 'react';

import { HeadHunterData, HeadingTag, Tag } from '../../components';

import { TopPageComponentProps } from './index.props';
import styles from './index.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <HeadingTag level="1">{page.title}</HeadingTag>
        {products.length && <Tag color="gray" size="medium">{products.length}</Tag>}
        <div className={styles.sort}>Сортировка</div>
      </header>

      <ul>
        {products.length && products.map(product => <li key={product._id}>{product.title}</li>)}
      </ul>

      <div className={styles.vacancies}>
        <div className={styles.titleWithTag}>
          <HeadingTag level="2">Вакансии - {page.category}</HeadingTag>
          <Tag color="red" size="small">hh.ru</Tag>
        </div>
        {firstCategory === TopLevelCategory.Courses && <HeadHunterData {...page.hh} />}
      </div>
    </>
  );
};

export default TopPageComponent;
