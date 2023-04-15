import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'normalize.css';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content='Personal Portfolio for Sergio Majé' />
        <meta name='author' content='Sergio Majé' />
        <meta name='copyright' content='Sergio Andrés Majé Franco' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
