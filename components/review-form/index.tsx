import React from 'react';
import cn from 'classnames';

import { Button, Input, Rating, Textarea } from '../index';

import { ReviewFormProps } from './index.props';
import styles from './index.module.css';

import CloseIcon from './close.svg';

const Review = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  return <>
    <form className={cn(styles.reviewForm, className)} {...props}>
      <Input placeholder="Имя" />
      <Input placeholder="Заголовок отзыва" />
      <div className={styles.ratingBlock}>
        Оценка:
        <Rating className={styles.rating} rating={0} />
      </div>
      <Textarea className={styles.textarea} placeholder="Текст отзыва" />
      <div className={styles.submit}>
        <Button type="submit">Отправить</Button>
        <p>*&nbsp;Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
      </div>
    </form>
    <div className={styles.success}>
      <button className={styles.successClose} type="button" aria-label="Закрыть">
        <CloseIcon />
      </button>
      <h4 className={styles.successTitle}>Ваш отзыв отправлен</h4>
      <p className={styles.successText}>Спасибо! Отзыв будет опубликован после проверки.</p>
    </div>
  </>;
};

export default Review;
