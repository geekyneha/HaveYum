import React, { useState } from "react";
import style from "./body.module.css";
import ResCard from "../Restaurant/ResCard";
import Search from "../Search/Search";;
import ResCardShimmer from "../Restaurant/ResCardShimmer";
import FilterButton from "../Button/FilterButton";
import Cuisine from "../cuisines/Cuisine";
import Offers from "../Offer/Offers";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import Offline from "../../Pages/Offline/Offline";
import useRestaurants from "../../hooks/useRestaurants";

const Body = () => {
  const listOfRestaurant = useRestaurants();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === "false") return <Offline />;
  return (
    <main className={style["main"]}>
      <Offers />
      <Cuisine />
      <div className={style["search"]}>
        <div className={style["button-container"]}>
          <FilterButton name={"Ratings 4.0+"} />
          <FilterButton name={"Fast Delivery"} />
          <FilterButton name={"Cost: Low to High"} />
          <FilterButton name={"Pure Veg"} />
          <FilterButton name={"offers"} />
        </div>
        <Search />
      </div>

      <div className={style["all-restaurats"]}>
        {listOfRestaurant.length === 0
          ? Array(20)
              .fill()
              .map((_, index) => <ResCardShimmer key={index} />)
          : listOfRestaurant.map((res) => (
              <ResCard resData={res.data} key={res.data.id} />
            ))}
      </div>
    </main>
  );
};

export default Body;
