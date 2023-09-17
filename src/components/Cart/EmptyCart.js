import React from 'react';
import style from './empty-cart.module.css';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className={style['empty-cart']}>
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png"
        alt="empty cart"
        width={400}
      />
      <h3>Your cart Bag is empty !</h3>
      <Link to="/">
        <button className={style['btn']}>Add items</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
