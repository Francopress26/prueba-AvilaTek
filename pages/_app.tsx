/* eslint-disable prettier/prettier */
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    Router.events.on('routeChangeError', () => {
      NProgress.done();
    });
  }, []);
  return (
    <>
      <Head>
        <title>Plantilla Next.js | Avila Tek</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
