import React from 'react';
import cn from 'classnames'

import { Button, Card, Rating, Tag } from '../index';

import { ProductProps } from './index.props';
import styles from './index.module.css';

const Product = ({ data, className, ...props }: ProductProps): JSX.Element => {
  const {
    advantages,
    disadvantages,
    categories,
    description,
    price,
    credit,
    initialRating,
    reviewAvg,
    reviewCount,
    image,
    title,
    oldPrice,
    _id: id
  } = data;

  return (
    <Card className={cn(styles.product, className)} {...props} color="white" >
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + image} width="70" height="70" alt="" aria-labelledby={id} />
      </div>
      <div className={styles.title} id={id}>{title}</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.credit}>{credit}</div>
      <div className={styles.rating}>
        <Rating rating={reviewAvg ?? initialRating} />
      </div>
      <ul className={styles.tags}>
        {categories.map(category => <li key={category}>
          <Tag color="ghost">{category}</Tag>
        </li>)}
      </ul>
      <div className={styles.priceLabel}>цена</div>
      <div className={styles.creditLabel}>кредит</div>
      <div className={styles.rateLabel}>{reviewCount} отзывов</div>

      <hr/>

      <p className={styles.description}>{description}</p>
      <div className={styles.features}>features</div>
      <div className={styles.advantages}>
        {advantages}
      </div>
      <div className={styles.disadvantages}>{disadvantages}</div>

      <hr/>

      <div className={styles.actions}>
        <Button>Узнать подробнее</Button>
        <Button appearance="ghost" arrowDirection={'right'}>Читать отзывы</Button>
      </div>
    </Card>
  );
};

export default Product;
