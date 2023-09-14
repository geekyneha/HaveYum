import React from "react";
import style from "./cart.module.css";

const Cart = () => {
  return (
    <div className={style["add-to-cart"]}>
      <div className={style["cart"]}>
        <div className={style["restaurant-details"]}>
          <div>img</div>
          <div>
            {" "}
            <div>name</div>
            <div>city</div>
          </div>
        </div>

        <div className={style["items"]}>
          <div>Veg nonveg</div>
          <div>name</div>
          <button>Add</button>
          <div>proce</div>
        </div>

        <div className={style["bill-detail"]}>
          <div className={style["item-total"]}>
            <div>item total</div>
            <div>price</div>
          </div>
          <div className={style["delivery"]}>
            <div>Delivery fee </div>
            <div>price</div>
          </div>
          <div className={style["platform-fee"]}>
            <div>Platform fee</div>
            <div>price</div>
          </div>
          <hr />
          <div className={style["total"]}>
            <div>To pay</div>
            <div>price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
