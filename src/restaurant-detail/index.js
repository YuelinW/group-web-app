import RestaurantInfo from "./restaurant-info";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {
  findRestaurantFromYelpByYelpIDThunk
} from "../restaurant/restaurants-thunks";

const RestaurantDetail = () =>{
  const {yid} = useParams();
  const dispatch = useDispatch();
  const {yelpRestaurant} = useSelector(state => state.restaurants); // from YelpAPI
  useEffect(() => {dispatch(findRestaurantFromYelpByYelpIDThunk(yid))}, [])

  return(
      <ul>
        {yelpRestaurant && <RestaurantInfo yelpRestaurant={yelpRestaurant}/>}
      </ul>
  );
};
export default RestaurantDetail;