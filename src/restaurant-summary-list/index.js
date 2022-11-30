import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import RestaurantSummaryItem from "./restaurant-summary-item.js";
import {findAllRestaurantsThunk} from "../restaurant/restaurants-thunks";

const RestaurantSummaryList = () => {
  const{restaurants, loading} = useSelector(
      state => state.restaurantsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllRestaurantsThunk())
  }, [])
  return (
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          <h1 className="text-primary">What's Popular: </h1>
      }
        {
          restaurants.map(restaurants =>
              <RestaurantSummaryItem
                  key={restaurants._id}
                  restaurants={restaurants}/>
          )
        }
      </ul>
  );
};
export default RestaurantSummaryList;