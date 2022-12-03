import RestaurantInfo from "./restaurant-info";
import ReviewAll from "./review-index";
import ReviewCreate from "./review-create";
import ReviewComponent from "./review-component";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {
  findRestaurantByYelpIdThunk,
  findRestaurantFromYelpByYelpIDThunk
} from "../restaurant/restaurants-thunks";
import RestaurantCreate from "./restaurant-create";

const RestaurantDetail = () =>{
  const {yid} = useParams();
  const dispatch = useDispatch();
  const {yelpRestaurant} = useSelector(state => state.restaurants); // from YelpAPI
  useEffect(() => {dispatch(findRestaurantFromYelpByYelpIDThunk(yid))}, [])

  return(
      <ul>
        {yelpRestaurant && <RestaurantInfo yelpRestaurant={yelpRestaurant}/>}
        <br/>
        {/*<ReviewAll/>*/}
      </ul>
  );
};
export default RestaurantDetail;