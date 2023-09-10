import React from "react";
import style from "./res-card.module.css";
import { CDN_URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const ResCard = ({ resData }) => {
  const {
    name,
    cuisines,
    deliveryTime,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    promoted,
    aggregatedDiscountInfo,
    id,
  } = resData;
  const navigate = useNavigate();
  const showMenu = (id) => {
    console.log("clicked");
    navigate("restaurant/" + id);
  };
  return (
    <div className={style.card}>
      <div className={style["image-container"]} onClick={() => showMenu(id)}>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food"
          className={style.food}
          width={295}
        />
        {promoted ? <p className={style.promoted}>Promoted</p> : ""}
        {aggregatedDiscountInfo ? (
          <p className={style.offer}>{aggregatedDiscountInfo.header}</p>
        ) : (
          ""
        )}

        <p className={style["delivery-time"]}>{deliveryTime} min</p>
      </div>
      <div className={style.content}>
        <div className={style["name-rating"]}>
          <h3 className={style.restaurant}>{name}</h3>{" "}
          <div className={style["rating"]}>
            <AiFillStar className={style["rating-icon"]} />
            {avgRating}
          </div>
        </div>
        <p className={style.cuisines}>{cuisines.join(", ")}</p>
        <div>₹{costForTwo / 100} For Two</div>

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
