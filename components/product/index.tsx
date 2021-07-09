import React from 'react';
import cn from 'classnames';

import { Button, Card, HeadingTag, Rating, Tag } from '../index';

import { ProductProps } from './index.props';
import styles from './index.module.css';
import { formatRuPrice, declOfNum } from '../../helpers';

const Product = ({ data, className, ...props }: ProductProps): JSX.Element => {
  const {
    advantages,
    disadvantages,
    categories,
    characteristics,
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
      <div className={styles.title} id={id}>
        <HeadingTag level="3">{title}</HeadingTag>
      </div>
      <div className={styles.price}>
        {formatRuPrice(price)}
        {oldPrice && <Tag className={styles.discount} color="green" size="small">{formatRuPrice(price - oldPrice)}</Tag>}
      </div>
      <div className={styles.credit}>
        {credit}<span>/мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={reviewAvg ?? initialRating} />
      </div>
      <ul className={styles.categories}>
        {categories.map(category => <li key={category}>
          <Tag color="ghost">{category}</Tag>
        </li>)}
      </ul>
      <div className={styles.priceLabel}>цена</div>
      <div className={styles.creditLabel}>кредит</div>
      <div className={styles.rateLabel}>{reviewCount} {declOfNum(reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>

      <hr/>

      <p className={styles.description}>{description}</p>
      <div className={styles.features}>
        {characteristics.map(characteristic => (
          <div className={styles.feature} key={characteristic.name}>
            <span className={styles.featureLabel}>{characteristic.name}</span>
            <span className={styles.dots} />
            <span className={styles.featureValue}>{characteristic.value}</span>
          </div>
        ))}
      </div>
      {advantages && <div className={styles.advantages}>
        <p className={styles.subtitle}>Преимущества</p>
        {advantages}
      </div>}
      {disadvantages && <div className={styles.disadvantages}>
        <p className={styles.subtitle}>Недостатки</p>
        {disadvantages}
      </div>}

      <hr/>

      <div className={styles.actions}>
        <Button>Узнать подробнее</Button>
        <Button className={styles.reviewsButton} appearance="ghost" arrowDirection={'right'}>Читать отзывы</Button>
      </div>
    </Card>
  );
};

export default Product;
