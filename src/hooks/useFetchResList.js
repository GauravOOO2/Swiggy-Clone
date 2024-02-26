import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateResList } from "../utils/resSlice";



const useFetchResList = ()=>{

    const dispatch = useDispatch();

    const fetchdata = async()=>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const jsondata = await data.json();
        console.log(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        dispatch(updateResList(jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants))
    }

    useEffect(()=>{
        fetchdata()
    },[])

}


export default useFetchResList;