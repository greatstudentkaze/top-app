import React, { FunctionComponent, useRef } from 'react';

import { AppContextProvider, IAppContext } from '../context/app.context';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
import { Up } from '../components';

import { LayoutProps } from './index.props';
import styles from './index.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const mainElementRef = useRef<HTMLElement>(null);

  const handleSkipMenuClick = () => {
    mainElementRef.current?.focus();
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.skipMenu} type="button" onClick={handleSkipMenuClick}>Сразу к содержанию</button>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main} ref={mainElementRef} tabIndex={0}>{children}</main>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return (props: T): JSX.Element => {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
