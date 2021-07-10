import React from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';

import { Button, Input, Rating, Textarea } from '../index';

import { IReviewForm } from './form.interface';
import { ReviewFormProps } from './index.props';
import styles from './index.module.css';

import CloseIcon from './close.svg';

const Review = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return <>
    <form className={cn(styles.reviewForm, className)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Input
        {...register('name', { required: { value: true, message: 'Заполните имя' } })}
        placeholder="Имя"
        error={errors.name}
      />
      <Input
        {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
        placeholder="Заголовок отзыва"
        error={errors.title}
      />
      <div className={styles.ratingBlock}>
        Оценка:
        <Controller
          control={control}
          name="rating"
          rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
          render={
            ({ field }) =>
              <Rating className={styles.rating} error={errors.rating} isEditable rating={field.value} ref={field.ref} setRating={field.onChange} />
          }
        />
      </div>
      <Textarea
        className={styles.textarea}
        {...register('description', { required: { value: true, message: 'Заполните текст отзыва' } })}
        placeholder="Текст отзыва"
        error={errors.description}
      />
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
