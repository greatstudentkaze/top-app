import React from 'react';

import { HeadingTag, Paragraph } from '../index';

import { TopPageAdvantage } from '../../interfaces/page.interface';

import { AdvantagesProps } from './index.props';
import styles from './index.module.css';
import TickIcon from './tick.svg';

const Advantage = (advantage: TopPageAdvantage): JSX.Element => (
  <li className={styles.advantage} key={advantage._id}>
    <div className={styles.decoration}>
          <span className={styles.icon}>
            <TickIcon/>
          </span>
    </div>
    <div>
      <h3 className={styles.title}>{advantage.title}</h3>
      <Paragraph size="large">{advantage.description}</Paragraph>
    </div>
  </li>
);

const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <>
      <HeadingTag level="2">Преимущества</HeadingTag>
      <ul className={styles.advantageList}>
        {advantages.map(advantage => Advantage(advantage))}
      </ul>
    </>
  );
};

export default Advantages;
