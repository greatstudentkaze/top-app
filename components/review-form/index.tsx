import React, { useState } from 'react';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

import { API } from '../../helpers/api';

import { Button, Input, Rating, Textarea } from '../index';

import { IReviewForm, IReviewSentResponse } from './form.interface';
import { ReviewFormProps } from './index.props';
import styles from './index.module.css';

import CloseIcon from './close.svg';

const Review = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm<IReviewForm>();
  const [isSuccessfulSend, setIsSuccessfulSend] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const tabIndexValue = isOpened ? 0 : -1;

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
      if (data.message) {
        setIsSuccessfulSend(true);
        reset();
      } else {
        setErrorMessage('Что-то пошло не так...');
      }

    } catch (err) {
      console.error(err.message);
      setErrorMessage('Что-то пошло не так, попробуйте обновить страницу.');
    }
  };

  return <>
    <form className={cn(styles.reviewForm, className)} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Input
        {...register('name', { required: { value: true, message: 'Заполните имя' } })}
        placeholder="Имя"
        error={errors.name}
        tabIndex={tabIndexValue}
        aria-invalid={!!errors.name}
      />
      <Input
        {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
        placeholder="Заголовок отзыва"
        error={errors.title}
        tabIndex={tabIndexValue}
        aria-invalid={!!errors.title}
      />
      <div className={styles.ratingBlock}>
        Оценка:
        <Controller
          control={control}
          name="rating"
          rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
          render={
            ({ field }) =>
              <Rating className={styles.rating} error={errors.rating} isEditable rating={field.value} ref={field.ref} setRating={field.onChange} tabIndex={tabIndexValue} />
          }
        />
      </div>
      <Textarea
        className={styles.textarea}
        {...register('description', { required: { value: true, message: 'Заполните текст отзыва' } })}
        placeholder="Текст отзыва"
        error={errors.description}
        tabIndex={tabIndexValue}
        aria-label="Текст отзыва"
        aria-invalid={!!errors.description}
      />
      <div className={styles.submit}>
        <Button type="submit" tabIndex={tabIndexValue} onClick={() => clearErrors()}>Отправить</Button>
        <p>*&nbsp;Перед публикацией отзыв пройдет предварительную модерацию и проверку</p>
      </div>
    </form>
    {isSuccessfulSend && <div className={styles.success}>
      <button className={styles.alertClose} type="button" aria-label="Закрыть" onClick={() => setIsSuccessfulSend(false)}>
        <CloseIcon />
      </button>
      <h4 className={styles.successTitle}>Ваш отзыв отправлен</h4>
      <p className={styles.successText}>Спасибо! Отзыв будет опубликован после проверки.</p>
    </div>}
    {errorMessage && <div className={styles.error}>
      <button className={styles.alertClose} type="button" aria-label="Закрыть" onClick={() => setErrorMessage('')}>
        <CloseIcon />
      </button>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </div>}
  </>;
};

export default Review;
