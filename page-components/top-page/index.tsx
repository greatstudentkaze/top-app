import React from 'react';

import { Advantages, HeadHunterData, HeadingTag, Skills, Tag } from '../../components';

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
