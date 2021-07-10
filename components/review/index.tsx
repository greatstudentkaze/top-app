import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { ReviewProps } from './index.props';
import styles from './index.module.css';
import UserIcon from './avatar.svg';
import { Rating } from '../index';

const Review = ({ data, className, ...props }: ReviewProps): JSX.Element => {
  const {
    title,
    description,
    name,
    createdAt,
    rating
  } = data;

  return <div className={cn(className, styles.review)} {...props}>
    <UserIcon className={styles.avatar} />
    <div className={styles.name}>
      {name}:&nbsp;
      <span className={styles.title}>{title}</span>
    </div>
    {/*todo: fix dateTime*/}
    <time
      className={styles.date}
      dateTime={createdAt.toString()}
    >{format(new Date(createdAt), 'd MMMM yyyy', { locale: ru })}</time>
    <Rating className={styles.rating} rating={rating} />
    <p className={styles.description}>
      {description}
    </p>
  </div>;
};

export default Review;
