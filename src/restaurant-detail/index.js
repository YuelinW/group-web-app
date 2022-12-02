import React from "react";
import RestaurantInfo from "./restaurant-info";
import ReviewAll from "./review-index";
import ReviewCreate from "./review-create";
import ReviewComponent from "./review-component";

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