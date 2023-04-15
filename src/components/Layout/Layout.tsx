import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';

type Props = {
  readonly title?: string;
} & PropsWithChildren;

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | ` : ''}Sergio Majé's Portfolio</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
