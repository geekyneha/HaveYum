import React from 'react';
import style from './cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CDN_URL } from '../../utils/constants';
import { clearCart } from '../../Redux/cartSlice';
import EmptyCart from './EmptyCart';
import { BsCircleFill } from 'react-icons/bs';
import { GoTriangleUp } from 'react-icons/go';
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
          <button
            onClick={handleClearCart}
            className={style['btn']}
          >
            Clear Cart
          </button>
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
                <div>
                  {item.card.info.isVeg === 1 ? (
                    <div className={style['veg']}>
                      <BsCircleFill
                        fill="green"
                        size={10}
                      />
                    </div>
                  ) : (
                    <div className={style['non-veg']}>
                      <GoTriangleUp fill="red" />
                    </div>
                  )}
                </div>
              </div>
              <div>{item.card.info.name}</div>

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
              <div>
                <span className={style['cut']}> ₹5</span>
                <span> ₹2</span>
              </div>
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
