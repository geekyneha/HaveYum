import React from "react";
import style from "./error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={style["error-page"]}>
      <h1>Whoops! Nothing to see here ...</h1>
      <div>
        {" "}
        <img
          src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
          alt="404-error"
        />
      </div>
      <h3>sorry we cant find the page you're looking for</h3>
      <Link to="/">
        <button className={style["btn"]}>Go to Home</button>
      </Link>
    </div>
  );
};

export default Error;
