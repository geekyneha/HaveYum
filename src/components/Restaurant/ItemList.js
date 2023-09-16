import React from 'react'
import style from './item-list.module.css'
import { BsCircleFill } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";
import { CDN_URL } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addItems } from '../../Redux/cartSlice';


const ItemList = ({items}) => {
  const dispatch = useDispatch()
  const handleAddItem =(item)=>{

    dispatch(addItems(item))

  }
  return (
    <div>
        {items.map((item, index) => {
          const {imageId,name,description,isVeg,price,defaultPrice}= item.card.info;
          return (  <div className={style["dish-container"]} key={index}>
          <div>
            {isVeg === 1 ? (
              <div className={style["veg"]}>
                <BsCircleFill fill="green" size={10} />
              </div>
            ) : (
              <div className={style["non-veg"]}>
                <GoTriangleUp fill="red" />
              </div>
            )}
            <h4 className={style["dish"]}>
              {name}
            </h4>
            <h5 className={style["price"]}>
              ₹
              {defaultPrice / 100 ||
                price / 100}
            </h5>
            <p className={style["detail"]}>
             {description}
            </p>
          </div>
  
          <div>
            {imageId ? (
              <img
                src={CDN_URL + imageId}
                alt="dish"
                className={style["dish-image"]}
                width={110}
              />
            ) : (
              ""
            )}
            <div className={style["button-container"]}>
              <button onClick={()=>handleAddItem(item)}
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
        </div>)
        }
          
    
    )
  }
    </div>
  )
}

export default ItemList






