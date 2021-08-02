import Head from "next/head";
import { useEffect, useState } from "react";

import "../styles/globals.css";

export const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://images.ctfassets.net" />
        <link rel="dns-prefetch" href="https://images.ctfassets.net" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
