import React from "react";
import style from "./offline.module.css";

const Offline = () => {
  return (
    <div className={style["offline-page"]}>
      <h3>
        It appears that you're currently offline. Please check your connection
        and try again later.
      </h3>
    </div>
  );
};

export default Offline;
