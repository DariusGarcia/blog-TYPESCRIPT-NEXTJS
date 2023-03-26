import Link from 'next/link';
import React from 'react';
import style from '../../styles/post.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <div className={style.postContainer}>
      <section className={style.postWrapper}>
        <h2>Start a blog for free</h2>
        <h1 className={style.headingTitle}>
          Publish, grow, and earn, all in one place.
        </h1>
        <p className={style.headerDescription}>
          If you have a story to tell, knowledge to share, or a perspective to
          offer — welcome home. Sign up for free so your writing can thrive in a
          network supported by millions of readers — not ads.
        </p>
        <Link href='/create' className={style.button}>
          Start writing
        </Link>
      </section>
      <section className={style.postHeaderImage}>
        <Image
          className={style.headerImage}
          src='https://picsum.photos/1080/720?grayscale'
          alt='header image'
          width={500}
          height={500}
        />
      </section>
    </div>
  );
}
