import React from 'react';
import style from './res-card-shimmer.module.css';
const ResCardShimmer = () => {
  return (
    <div className={style.card}>
      <div className={style['image-container']}>
        <div className={style.food}></div>
      </div>
      <div className={style.content}>
        <div className={style.restaurant}></div>
        <div className={style.cuisines}></div>

        <div className={style['max-safety']}></div>
      </div>
    </div>
  );
};

export default ResCardShimmer;
