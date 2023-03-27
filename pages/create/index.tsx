import BlogForm from '@/features/blogForm/blogForm';
import React from 'react';
import style from '../../styles/createPost.module.css';

export default function CreatePage() {
  return (
    <div className={style.container}>
      <BlogForm />
    </div>
  );
}
