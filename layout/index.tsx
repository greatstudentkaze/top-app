import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

import { LayoutProps } from './index.props';
import styles from './index.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return (props: T): JSX.Element => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
