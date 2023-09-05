import React, { useEffect, useState } from "react";
import style from './res-menu-.module.css'
import { RES_MENU_API } from '../../utils/constants.js'
import { useParams } from "react-router-dom"; 


const ResMenu = () => {

  const [resInfo,setResInfo ]= useState(null);
  const {resId} = useParams(); 

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{

    const response = await fetch (RES_MENU_API+resId);
    console.log(RES_MENU_API+resId)
    const data = await  response.json();
console.log(data.data.cards[0].card.card.info)
  //   console.log(data[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  //   console.log(data[0]?.card?.card?.info)
    setResInfo(data.data);


  // }
  // const { lastMileTravelString, deliveryTime, costForTwoMessage } =
  //   data[0]?.card?.card?.info?.sla;
  // const { itemCards} = data[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;




}
if (resInfo==null)  return <div>Loading...</div>;
  
  const { name, cuisines, areaName,avgRating,costForTwoMessage

  } =resInfo?.cards[0]?.card?.card?.info;

  
  return(

    

    <div className={style["menu-page"]}>

      <div className={style["menu-container"]}>

        <div className={style["about-restaurant"]}>

          <div>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
          </div>

          <div>
            <div>{avgRating
}</div>
          </div>

         

          

        </div>
        <div className={style["price-del"]}>
            <h5>19 mins</h5> 
            <h5>{costForTwoMessage}</h5>
          </div>
        <div className={style["menu"]} >
           

        </div>

        <div className={style["license"]}>

        </div>



      </div>


    </div>
    
    );
};

export default ResMenu;
