import React from 'react';
import Image from 'next/image';
import style from '../../styles/blogCard.module.css';

export default function BlogCard() {
  return (
    <section className={style.blogCardContainer}>
      {blogContent.map((blog, index) => (
        <article className={style.blogArticle}>
          <h1>{blog.title}</h1>
          <Image
            alt='blog'
            src={blog.image}
            width={500}
            height={500}
            className={style.image}
          />
          <p>{blog.content}</p>
        </article>
      ))}
    </section>
  );
}

const blogContent = [
  {
    title: 'title',
    content: 'content',
    date: 'date',
    image: 'https://picsum.photos/seed/picsum/400/600',
  },
  {
    title: 'title',
    content: 'content',
    date: 'date',
    image: 'https://picsum.photos/seed/picsum/400/600',
  },
  {
    title: 'title',
    content: 'content',
    date: 'date',
    image: 'https://picsum.photos/seed/picsum/400/600',
  },
];
