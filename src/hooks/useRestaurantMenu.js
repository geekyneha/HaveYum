import React,{useState,useEffect} from 'react'
import { RES_MENU_API } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const useRestaurantMenu=(restaurantId)=>{

 const navigate = useNavigate();
    const [resInfo,setResInfo]=useState(null)


  useEffect(()=>{
     fetchData();
  },[])
  const showMenu=(id)=>{
    console.log("clicked")
      navigate("restaurant/"+id)
 
     }
const fetchData= async()=>{

    const data = await fetch (RES_MENU_API +restaurantId);
    const json= await data.json();

    setResInfo(json.data)

}

return resInfo;


}

export default useRestaurantMenu;



