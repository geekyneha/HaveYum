import React from 'react';
import style from './cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CDN_URL } from '../../utils/constants';
import { clearCart } from '../../Redux/cartSlice';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className={style['add-to-cart']}>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className={style['cart']}>
          <button onClick={handleClearCart}>Clear Cart</button>
          <div className={style['restaurant-details']}>
            <div></div>
            <div>
              <div>name</div>
              <div>city</div>
            </div>
          </div>

          {cartItems.map((item, index) => (
            <div className={style['items']}>
              <div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  alt=""
                  width={20}
                />
              </div>
              <div>{item.card.info.name}</div>
              <button>Add</button>
              <div>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
            </div>
          ))}

          <div className={style['bill-detail']}>
            <div className={style['item-total']}>
              <div>item total</div>
              <div>price</div>
            </div>
            <div className={style['delivery']}>
              <div>Delivery fee </div>
              <div>price</div>
            </div>
            <div className={style['platform-fee']}>
              <div>Platform fee</div>
              <div>price</div>
            </div>
            <hr />
            <div className={style['total']}>
              <div>To pay</div>
              <div>price</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
