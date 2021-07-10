import React from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';

import { Button, Input, Rating, Textarea } from '../index';

import { IReviewForm } from './form.interface';
import { ReviewFormProps } from './index.props';
import styles from './index.module.css';

import CloseIcon from './close.svg';

const Review = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return <>
    <form className={cn(styles.reviewForm, className)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Input {...register('name')} placeholder="Имя" />
      <Input {...register('title')} placeholder="Заголовок отзыва" />
      <div className={styles.ratingBlock}>
        Оценка:
        <Controller
          control={control}
          name="rating"
          render={
            ({ field }) =>
              <Rating className={styles.rating} isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
          }
        />
      </div>
      <Textarea className={styles.textarea} {...register('description')} placeholder="Текст отзыва" />
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
