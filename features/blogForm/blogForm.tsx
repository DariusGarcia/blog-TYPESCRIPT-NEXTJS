import React, { EventHandler, ReactElement, useState } from 'react';
import Head from 'next/head';
import style from '../../styles/createPost.module.css';

export default function BlogForm(): ReactElement {
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: '',
  });

  function handleOnFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPost({ ...post, image: reader.result as string });
      };
    } else {
      setPost({ ...post, image: '' });
    }
  }

  console.log(
    { 'title state': post.title },
    { 'content state': post.content },
    {
      'image state': post.image,
    }
  );
  return (
    <>
      <Head>
        <title>Blog - Create a post</title>
      </Head>
      <div className={style.postCard}>
        <form action='#' className={style.blogForm}>
          <h1 className={style.formTitle}>Create a new blog post</h1>
          <label htmlFor='post title'>Enter post title</label>
          <input
            type='text'
            maxLength={60}
            className={style.formInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setPost({ ...post, title: e.target.value })
            }
          />
          <label htmlFor='post content'>Enter post text</label>
          <textarea
            name='content'
            className={style.formTextArea}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setPost({ ...post, content: e.target.value })
            }
          />
          <label htmlFor='post image'>Select an image</label>
          <input
            type='file'
            name='image'
            accept='image/*'
            id='file'
            className={style.formFileChooser}
            onChange={handleOnFileChange}
          />
          <div className={style.buttonWrapper}>
            <button type='submit' className={style.formButton}>
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
