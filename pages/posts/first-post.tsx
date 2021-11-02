import React from "react";

import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout";
export default function Firstpost() {
  return (
    <Layout>
      <Head>
        <title>First post</title>
      </Head>

      <h1>Title post</h1>

      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
}
