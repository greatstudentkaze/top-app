import React, { ForwardedRef, forwardRef, useEffect, useState } from 'react';
import cn from 'classnames';

import { RatingProps } from './index.props';
import styles from './index.module.css';
import StarIcon from './star.svg';

// todo: accessibility
const Rating = forwardRef(({ rating, setRating, isEditable = false, className, ...props }: RatingProps, ref: ForwardedRef<HTMLUListElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (rating: number) => {
    if (!isEditable) {
      return;
    }

    constructRating(rating);
  };

  const updateRating = (rating: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(rating);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((item, i) =>
      <StarIcon className={cn(styles.star, {
        [styles.filled]: i < currentRating,
      })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => updateRating(i + 1)}
      />);

    setRatingArray(updatedArray);
  };

  return <ul className={cn(styles.rating, className)} ref={ref} {...props}>
    {ratingArray.map((item, i) => <li key={i}>{item}</li>)}
  </ul>;
});

export default Rating;
