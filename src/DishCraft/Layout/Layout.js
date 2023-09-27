import React from 'react';
import Post from '../Post/Post';
import style from './layout.module.css';

const Layout = () => {
  return (
    <div className={style['wrapper']}>
      <div className={style['post-section']}>
        <Post />
      </div>
      <div className={style['feeds']}></div>
    </div>
  );
};

export default Layout;
