import Head from 'next/head';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';

import { AppPropsWithLayout } from '@/types/next';

import 'normalize.css';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

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

      <WrapBalancerProvider>
          {getLayout(<Component {...pageProps} />)}
      </WrapBalancerProvider>
    </>
  );
}
