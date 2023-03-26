import BlogCard from '@/features/blog/blogCard';
import React from 'react';
import style from '../../styles/header.module.css';

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerContent}>
        <h1>Latest</h1>
        <BlogCard />
      </div>
    </div>
  );
}
