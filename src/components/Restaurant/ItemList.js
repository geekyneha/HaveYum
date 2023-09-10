import React from 'react'
import style from './item-list.module.css'
import { BsCircleFill } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";
import { CDN_URL } from '../../utils/constants';


const ItemList = ({items}) => {
  return (
    <div>
        {items.map((item, index) => (
      <div className={style["dish-container"]} key={index}>
        <div>
          {item.card.info.isVeg === 1 ? (
            <div className={style["veg"]}>
              <BsCircleFill fill="green" size={10} />
            </div>
          ) : (
            <div className={style["non-veg"]}>
              <GoTriangleUp fill="red" />
            </div>
          )}
          <h4 className={style["dish"]}>
            {item.card.info.name}
          </h4>
          <h5 className={style["price"]}>
            ₹
            {item.card.info.defaultPrice / 100 ||
              item.card.info.price / 100}
          </h5>
          <p className={style["detail"]}>
            {item.card.info.description}
          </p>
        </div>

        <div>
          {item.card.info.imageId ? (
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="dish"
              className={style["dish-image"]}
              width={110}
            />
          ) : (
            ""
          )}
          <div className={style["button-container"]}>
            {" "}
            <button
              className={
                item.card.info.imageId
                  ? style["add-button"]
                  : style["add-btn"]
              }
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    ))
  }
    </div>
  )
}

export default ItemList






