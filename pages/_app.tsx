import React, { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "../store";
import Layout from "../components/Layout";
import "../styles/globals.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Merienda&display=swap"
        rel="stylesheet"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default wrapper.withRedux(MyApp);
