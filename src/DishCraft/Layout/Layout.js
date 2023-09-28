import React from 'react';
import Post from '../Post/Post';
import style from './layout.module.css';
import { Feed } from '../Feed/Feed';

const Layout = () => {
  return (
    <div className={style['wrapper']}>
      <div className={style['post-section']}>
        <Post />
      </div>
      <div className={style['feeds']}>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
    </div>
  );
};

export default Layout;
