import React from "react";
import style from "./footer.module.css";
import { APP_LOGO } from "../../utils/constants";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={style["footer-container"]}>
        <div className={style["company-name"]}>
          <div className={style["company"]}>
            <img src={APP_LOGO} alt="Have-Yum" className={style["logo"]} />
            <span>Have Yum</span>
          </div>
          <p>@2023 Have Yum pvt.ltd</p>
        </div>
        <div>
          <h3>Company</h3>
          <li className={style["item"]}>About</li>
          <li className={style["item"]}>Careers</li>
          <li className={style["item"]}>Team</li>
          <li className={style["item"]}>Have yum</li>
          <li className={style["item"]}>Partnership</li>
        </div>
        <div>
          <h3>Contact</h3>

          <li className={style["item"]}>Help & support </li>
          <li className={style["item"]}>Partner with us</li>
          <li className={style["item"]}>Ride with us</li>
        </div>
        <div>
          <h3>We deliver to </h3>
          <li className={style["item"]}>Bangluru</li>
          <li className={style["item"]}>Amravati</li>
          <li className={style["item"]}>Chennai</li>
          <li className={style["item"]}>Dehradun</li>
          <li className={style["item"]}>Gujrat</li>
          <li className={style["item"]}>Haryana</li>
          <li className={style["item"]}>Mumbai</li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
