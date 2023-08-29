import React from "react";
import style from "./res-card.module.css";
import { CDN_URL } from "../../utils/constants";

const ResCard = ({ resData }) => {
  const {
    name,
    cuisines,
    deliveryTime,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    promoted,
  } = resData;

  return (
    <div className={style.card}>
      <div className={style["image-container"]}>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food"
          className={style.food}
          width={295}
        />
        {promoted ? <p className={style.promoted}>Promoted</p> : ""}
        <p className={style.offer}>50 % OFF up to 100</p>
        <p className={style["delivery-time"]}>{deliveryTime} min</p>
      </div>
      <div className={style.content}>
        <h3 className={style.restaurant}>{name}</h3>
        <p className={style.cuisines}>{cuisines.join(", ")}</p>
        {/* <div><div>{costForTwo}</div><div>{avgRating}</div></div> */}

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
