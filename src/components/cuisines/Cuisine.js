import React, { useRef } from "react";
import { cuisines } from "../../utils/mock";
import * as style from "./cuisine.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Cuisine = () => {
  const cuisineContainer = useRef(null);

  const scrollLeft = () => {
    cuisineContainer.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cuisineContainer.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };
  return (
    <div className={style["cuisine-container"]}>
      <div className={style["heading"]}>
        <h2>what's on your mind?</h2>
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

      <div className={style["cuisine"]} ref={cuisineContainer}>
        {cuisines.map((cuisine) => (
          <div key={cuisine.id}>
            <img src={cuisine.imgUrl} alt={cuisine.name}  className={style["cuisine-img"]}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
