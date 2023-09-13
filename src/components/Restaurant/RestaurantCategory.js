import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import style from "./restaurant-ctegory.module.css";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const showItems = () => {
    setShowIndex(!showItem);
  };
  return (
    // header

    <div>
      <div className={style["header"]}>
        <div className={style["accordion-header"]} onClick={showItems}>
          <div className={style["item-category"]}>
            {data.title} ({data.itemCards.length})
          </div>
          <div className={style["arrow"]}>
            {showItem ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
