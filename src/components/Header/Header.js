import React from 'react';
import * as style from './header.module.css';
import { FiShoppingBag } from 'react-icons/fi';
import { BiDish } from 'react-icons/bi';
import { MdPerson2 } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { TbListDetails } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { APP_LOGO } from '../../utils/constants';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <nav className={style['navbar']}>
      <div className={style['nav-container']}>
        <Link
          to="/"
          className={style['link']}
        >
          <div>
            <img
              src={APP_LOGO}
              alt="Have
        yum"
              width={40}
              height={40}
              className={style['logo']}
            />
          </div>
        </Link>
        <div className={style['nav-items-container']}>
          <Link
            to="/"
            className={style['link']}
          >
            <li className={style['nav-item']}>
              <span className={style['d-none']}> Home</span> <AiOutlineHome />
            </li>
          </Link>
          {/* <li className={style["nav-item"]}>
            <span className={style["d-none"]}> About</span> <TbListDetails />
          </li> */}
          <li className={style['nav-item']}>
            <span className={style['d-none']}> dish Craft</span> <BiDish />
          </li>

          <Link
            to="/cart"
            className={style['link']}
          >
            <li className={style['nav-item']}>
              <span className={style['d-none']}>Cart </span> <FiShoppingBag />
              <span className={style['item-count']}>{cart.length}</span>
            </li>
          </Link>
          <li className={style['nav-item']}>
            <span className={style['d-none']}>Sign up</span> <MdPerson2 />
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
