import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <nav className={style["navbar"]}>
      <div className={style["nav-container"]}>
        <div>haveYum</div>
        <div className={style["nav-items-container"]}>
          <li className={style["nav-item"]}>Home</li>
          <li className={style["nav-item"]}>About</li>
          <li className={style["nav-item"]}>Sign up</li>
          <li className={style["nav-item"]}>Cart</li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
