import React, { useRef, useState, MouseEvent } from 'react';
import cn from 'classnames';

import Image from 'next/image';

import { Button, Card, HeadingTag, Rating, Review, ReviewForm, Tag } from '../index';

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
    reviews,
    image,
    title,
    oldPrice,
    _id: id
  } = data;

  const [isReviewOpened, setIsReviewOpened] = useState(false);
  const reviewElementRef = useRef<HTMLDivElement>(null);

  const scrollToReview = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    setIsReviewOpened(true);
    reviewElementRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Card className={cn(styles.product, className)} {...props} color="white" ref={null}>
        <div className={styles.logo}>
          <Image src={process.env.NEXT_PUBLIC_DOMAIN + image} width="70" height="70" alt="" aria-labelledby={id} />
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
        <div className={styles.rateLabel}>
          <a href={`ref-${id}`} onClick={scrollToReview}>
            {reviewCount} {declOfNum(reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
        </div>

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

        <hr />

        <div className={styles.actions}>
          <Button>Узнать подробнее</Button>
          <Button
            className={styles.reviewsButton}
            appearance="ghost"
            arrowDirection={isReviewOpened ? 'down' : 'right'}
            onClick={() => setIsReviewOpened(state => !state)}
          >Читать отзывы</Button>
        </div>
      </Card>
      <Card className={cn(styles.reviews, {
        [styles.opened]: isReviewOpened,
        [styles.closed]: !isReviewOpened,
      })} color="lightpurple" ref={reviewElementRef} id={`ref-${id}`}>
        {reviews.map(review => <div key={review._id}>
          <Review data={review} />
          <hr />
        </div>)}
        <ReviewForm productId={id} />
      </Card>
    </>
  );
};

export default Product;
