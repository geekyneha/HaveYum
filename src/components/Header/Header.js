import React from "react";
import style from "./header.module.css";
import { FiShoppingBag } from "react-icons/fi";
import { BiDish } from "react-icons/bi";
import { MdPerson2 } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";

const Header = () => {
  return (
    <nav className={style["navbar"]}>
      <div className={style["nav-container"]}>
        <div>
          <img
            src="https://media.istockphoto.com/id/1197904085/vector/pink-h-smile-vector-template.jpg?s=612x612&w=0&k=20&c=6SpIFvz2oaR0UeZVD_47c_KaotSSHuOROoUD9owqvpU="
            alt="Have
        yum"
            width={40}
            height={40}
            className={style["logo"]}
          />
        </div>
        <div className={style["nav-items-container"]}>
          <li className={style["nav-item"]}>
            Home <AiOutlineHome />{" "}
          </li>
          <li className={style["nav-item"]}>
            About <TbListDetails />
          </li>
          <li className={style["nav-item"]}>
            dish Craft <BiDish />
          </li>

          <li className={style["nav-item"]}>
            Cart <FiShoppingBag />{" "}
          </li>
          <li className={style["nav-item"]}>
            Sign up <MdPerson2 />
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
