import React from 'react';
import cn from 'classnames';

import { FooterProps } from './index.props';
import styles from './index.module.css';

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <footer {...props}>
      footer
    </footer>
  );
};

export default Footer;
