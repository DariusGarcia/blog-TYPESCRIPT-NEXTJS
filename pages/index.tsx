import Head from 'next/head';
import style from '../styles/home.module.css';
import Header from '@/components/header/header';

export default function Home() {
  return (
    // remove this height styling
    <div style={{ height: '100vh' }}>
      <Head>
        <title>Blog App - Home</title>
        <meta name='description' content='Blog App home page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={style.wrapper}>
        <Header />
      </div>
    </div>
  );
}
