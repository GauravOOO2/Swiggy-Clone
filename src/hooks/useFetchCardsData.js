import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { updateCaresData, updateMenuData } from "../utils/resSlice";
import { useParams } from "react-router-dom";


 
const useFetchCardsData = ()=>{
    const dispatch = useDispatch();
    const { id }= useParams();

const fetchdata = async() => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}`)
    const jsondata = await data.json();
    console.log(jsondata?.data?.cards[2]?.card?.card?.info);
    console.log(jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    dispatch(updateMenuData(jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards))
    dispatch(updateCaresData(jsondata?.data?.cards[2]?.card?.card.info))

  }

  useEffect(() => {
    fetchdata();
  }, []);


}

export default useFetchCardsData;