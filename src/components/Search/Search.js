import React from "react";
import style from "./search.module.css";
const Search = () => {
  return (
    <>
      <div className={style["search-container"]}>
        <input type="text" placeholder="search" className={style["search"]} />
        <button className={style["button"]}>Search</button>
      </div>
    </>
  );
};

export default Search;
