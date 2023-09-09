import React, { useRef } from "react";
import { offers } from "../../utils/mock";
import style from "./offers.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Offers = () => {
  const offersContainer = useRef(null);

  const scrollLeft = () => {
    offersContainer.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    offersContainer.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };
  return (
    <div className={style["offers-container"]}>
      <div className={style["heading"]}>
        <h2>Best offers for you</h2>

        <div className={style["arrow-container"]}>
          <BsFillArrowLeftCircleFill
            size={30}
            fill="lightgray"
            className={style["left-icon"]}
            onClick={scrollLeft}
          />
          <BsFillArrowRightCircleFill
            size={30}
            fill="lightgray"
            className={style["right-icon"]}
            onClick={scrollRight}
          />
        </div>
      </div>
      <div className={style["offers"]} ref={offersContainer}>
        {offers.map((offer) => (
          <div className={offer.imgId}>
            <img
              src={offer.imgUrl}
              alt="offers"
              width={400}
              className={style["offer-img"]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
