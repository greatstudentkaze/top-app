import React, { SyntheticEvent, useEffect } from 'react';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';

import useVerticalScroll from '../../hooks/useVerticalScroll';

import styles from './index.module.css';
import ArrowIcon from './up-arrow.svg';

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
    <motion.a
      href="#"
      className={cn(styles.up)}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ArrowIcon />
    </motion.a>
  );
};

export default Up;
