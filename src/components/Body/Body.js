import React from "react";
import style from "./body.module.css";
import ResCard from "../Restaurant/ResCard";
import Search from "../Search/Search";

const Body = () => {
  return (
    <main className={style["main"]}>
      <div className={style["search"]}>
        <div>
          <span>fliter </span>
          <span>fliter </span>
          <span>fliter </span>
        </div>
        <Search />
      </div>
      <div className={style["all-restaurats"]}>
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </main>
  );
};

export default Body;
