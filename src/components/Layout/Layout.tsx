import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

import { NavBar } from '@/components/NavBar';

type Props = {
  readonly title?: string;
} & PropsWithChildren;

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ` : ''}Sergio Majé's Portfolio</title>
      </Head>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
