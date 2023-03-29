import React from 'react';
import Head from 'next/head';
import Header from '@/features/post/header';

export default function index() {
  return (
    <div>
      <Head>
        <title>Blog App - Creators</title>
      </Head>
      <Header />
    </div>
  );
}
