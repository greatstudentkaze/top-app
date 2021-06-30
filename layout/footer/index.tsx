import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';

import { FooterProps } from './index.props';
import styles from './index.module.css';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p className={styles.copyright}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все&nbsp;права&nbsp;защищены</p>
      <a className={styles.termsOfUse} href="/" target="_blank">Пользовательское соглашение</a>
      <a className={styles.privacyPolicy} href="/" target="_blank">Политика конфиденциальности</a>
    </footer>
  );
};

export default Footer;
