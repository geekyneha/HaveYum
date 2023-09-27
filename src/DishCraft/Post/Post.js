import React, { useState } from 'react';
import style from './post.module.css';
import { BiImageAdd } from 'react-icons/bi';
import { AiOutlineFileGif, AiOutlineVideoCameraAdd } from 'react-icons/ai';
const Post = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [postText, setPostText] = useState();
  return (
    <div className={style['wrapper']}>
      <div className={style['input-box']}>
        <div className={style['post-area']}>
          <span
            className={`${style['placeholder']}  ${
              isTyping && style['d-none']
            } `}
          >
            What's new?!
          </span>
          <div
            className={`${style['input']} ${style['editable']}`}
            contentEditable="true"
            spellCheck="false"
            onKeyDown={() => setIsTyping(true)}
          ></div>
          <div
            className={`${style['input']} ${style['readonly']}`}
            contentEditable="true"
            spellCheck="false"
          ></div>
        </div>
      </div>
      <div className={style['post-option']}>
        <ul className={style['icons']}>
          <li className={style['icon']}>
            <BiImageAdd size={25} />
          </li>
          <li className={style['icon']}>
            <AiOutlineFileGif size={25} />
          </li>
          <li className={style['icon']}>
            <AiOutlineVideoCameraAdd size={25} />
          </li>
        </ul>

        <div>
          <button className={style['btn']}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
