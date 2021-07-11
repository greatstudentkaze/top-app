import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { Router } from 'next/router';

import '../styles/globals.css';
import React from 'react';
import ym, { YMInitializer } from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  ym('hit', url);
});

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {

  return <>
    <Head>
      <title>MyTop — лучший топ</title>
      <link rel="icon" href="favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
            rel="stylesheet" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
      <meta property="og:locale" content="ru_RU" />
      <link rel="preconnect" href="https://mc.yandex.ru" />
    </Head>
    <YMInitializer accounts={[]} options={{ webvisor: true, defer: true }} version="2" />
    <Component {...pageProps} />
  </>;
}

export default MyApp;
