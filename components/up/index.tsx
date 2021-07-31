import React, { SyntheticEvent, useEffect } from 'react';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';

import useVerticalScroll from '../../hooks/useVerticalScroll';
import ButtonIcon from '../button-icon';

import styles from './index.module.css';

const Up = (): JSX.Element => {
  const controls = useAnimation();
  const scrollY = useVerticalScroll();

  useEffect(() => {
    controls.start({ opacity: scrollY / document.body.scrollHeight });
  }, [scrollY, controls]);

  const scrollToTop = (evt: SyntheticEvent) => {
    evt.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className={cn(styles.up)}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon icon={'UP_ARROW'} aria-label="Вернуться наверх" />
    </motion.div>
  );
};

export default Up;
