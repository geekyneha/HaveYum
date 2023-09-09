import React from "react";
import style from "./error.module.css";
import { Link } from "react-router-dom";
import { ERROR_GIF } from "../../utils/constants";

const Error = () => {
  return (
    <div className={style["error-page"]}>
      <h1>Whoops! Nothing to see here ...</h1>
      <div>
        <img src={ERROR_GIF} alt="404-error" />
      </div>
      <h3>sorry we cant find the page you're looking for</h3>
      <Link to="/">
        <button className={style["btn"]}>Go to Home</button>
      </Link>
    </div>
  );
};

export default Error;
