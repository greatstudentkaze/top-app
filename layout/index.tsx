import React, { FunctionComponent } from 'react';
import cn from 'classnames';

import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

import { LayoutProps } from './index.props';
import styles from './index.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <div>{children}</div>
      </main>
      <Footer />
    </>
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
