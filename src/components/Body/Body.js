import React, { useEffect, useState } from "react";
import style from "./body.module.css";
import ResCard from "../Restaurant/ResCard";
import Search from "../Search/Search";
import { RES_API_URL } from "../../utils/constants";
import ResCardShimmer from "../Restaurant/ResCardShimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_API_URL);
    const data = await response.json();
    console.log(data);
    setListOfRestaurant(data);
  };
  // if (listOfRestaurant.length === 0) {
  //   return <ResCardShimmer />;
  // }

  return (
    <main className={style["main"]}>
      <div className={style["search"]}>
        <div>
          <button className={style["Top-rated-btn"]}>Ratings 4.0+</button>
          <span>fliter </span>
          <span>fliter </span>
        </div>
        <Search />
      </div>

      <div className={style["all-restaurats"]}>
        {listOfRestaurant.length===0 ?
        Array(20).fill().map((_,index)=><ResCardShimmer key={index} />)
        :
        listOfRestaurant.map((res) => (
          <ResCard resData={res.data} key={res.data.id} />
        ))}
      </div>
    </main>
  );
};

export default Body;
