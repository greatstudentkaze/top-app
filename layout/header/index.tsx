import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import { HeaderProps } from './index.props';
import styles from './index.module.css';
import Logo from '../logo.svg';
import ButtonIcon from '../../components/button-icon';
import Sidebar from '../sidebar';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const router = useRouter();

  const menuVariants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  useEffect(() => {
    setIsMenuOpened(false);
  }, [router]);

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon
        className={styles.toggle}
        icon={isMenuOpened ? 'CROSS' : 'BURGER'}
        appearance="white"
        onClick={() => setIsMenuOpened(state => !state)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={menuVariants}
        initial={'closed'}
        animate={isMenuOpened ? 'opened' : 'closed'}
      >
        <Sidebar />
      </motion.div>
    </header>
  );
};

export default Header;
