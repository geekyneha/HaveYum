import React from "react";
import * as style from "./filter-button.module.css";

const FilterButton = ({ name }) => {
  return <button className={style["filter-Button"]}>{name}</button>;
};

export default FilterButton;
