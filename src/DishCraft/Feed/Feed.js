import React from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BiFoodMenu } from 'react-icons/bi';
import { FiShare } from 'react-icons/fi';
import style from './feed.module.css';

export const Feed = () => {
  return (
    <div className={style['feed-container']}>
      <div className={style['user']}>
        <div className={style['user-info']}>
          <div className={style['about-user']}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v-Quj0rUbKfkYkO5xry7QsyV_3dNemjlbw&usqp=CAU"
              alt="user"
              className={style['profile']}
            />
            <div>
              <div>@usename</div>
              <div>user</div>
            </div>
          </div>
          <div>
            <FiMoreVertical size={25} />
          </div>
        </div>
      </div>

      <div className={style['feed-post']}>
        <img
          src="https://www.ebastores.com/images/blogs/blogsyzqLErkUtV.webp"
          alt="feed-post"
          className={style['feed-image']}
        />
      </div>
      <div className={style['caption']}>
        <span>@usename </span> Type your caption here
      </div>

      <div className={style['post-insight']}>
        <AiOutlineHeart size={25} />

        <FaRegCommentAlt size={25} />
        <BiFoodMenu size={25} />
        <FiShare size={25} />
      </div>
    </div>
  );
};
