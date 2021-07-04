import React from 'react';

import { Card } from '../index';

import { HeadHunterDataProps } from './index.props';
import styles from './index.module.css';
import StarIcon from './star.svg';

const HeadHunterData = ({ count, juniorSalary, middleSalary, seniorSalary }: HeadHunterDataProps): JSX.Element => {
  return <div className={styles.headhunter}>
    <Card className={styles.count}>
      <p className={styles.title}>Всего вакансий</p>
      <p className={styles.countValue}>{count}</p>
    </Card>
    <Card className={styles.salaries}>
      <div className={styles.salaryItem}>
        <p className={styles.title}>Начальный</p>
        <p className={styles.salaryValue}>{juniorSalary}</p>
        <ul className={styles.rate}>
          <li><StarIcon className={styles.starActive} /></li>
          <li><StarIcon /></li>
          <li><StarIcon /></li>
        </ul>
      </div>
      <div className={styles.salaryItem}>
        <p className={styles.title}>Средний</p>
        <p className={styles.salaryValue}>{middleSalary}</p>
        <ul className={styles.rate}>
          <li><StarIcon className={styles.starActive} /></li>
          <li><StarIcon className={styles.starActive} /></li>
          <li><StarIcon /></li>
        </ul>
      </div>
      <div className={styles.salaryItem}>
        <p className={styles.title}>Профессионал</p>
        <p className={styles.salaryValue}>{seniorSalary}</p>
        <ul className={styles.rate}>
          <li><StarIcon className={styles.starActive} /></li>
          <li><StarIcon className={styles.starActive} /></li>
          <li><StarIcon className={styles.starActive} /></li>
        </ul>
      </div>
    </Card>
  </div>;
};

export default HeadHunterData;
