import React from "react";
import RestaurantInfo from "./restaurant-info";
import ReviewAll from "./review-index";

const RestaurantDetail = () =>{

  return(
      <ul>
        <RestaurantInfo/>
        <br/>
        <ReviewAll/>
      </ul>
  );
};
export default RestaurantDetail;