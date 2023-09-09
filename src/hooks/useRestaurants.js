import { useState, useEffect } from "react";
import { RES_API_URL } from "../utils/constants";
const useRestaurants = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_API_URL);
    const data = await response.json();

    setListOfRestaurant(data);
  };

  return listOfRestaurant;
};
export default useRestaurants;
