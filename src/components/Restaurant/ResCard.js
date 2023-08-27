import React from "react";
import style from "./res-card.module.css";

const ResCard = () => {
  return (
    <div className={style.card}>
      <div className={style["image-container"]}>
        <img
          src="https://source.unsplash.com/430x250/?burger"
          alt="food"
          className={style.food}
          width={295}
        />
        <p className={style.promoted}>Promoted</p>
        <p className={style.offer}>50 % OFF up to 100</p>
        <p className={style["delivery-time"]}>38 min</p>
      </div>
      <div className={style.content}>
        <h3 className={style.restaurant}>Center Point Restaurant</h3>
        <p className={style.cuisines}>North-Indian , Chinese</p>

        <hr />
        <div className={style["max-safety"]}>
          <div className={style.container}>
            <div className={style.safety}>max safety</div>
            <div className={style.delivery}>delivery</div>
          </div>

          <div className={style["about-safety"]}>
            Follows All Max Safety Measures to ensure your food is safe.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
