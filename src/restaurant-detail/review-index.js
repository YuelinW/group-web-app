import React from "react";
import ReviewComponent from "./review-component";
import ReviewCreate from "./review-create";

const  ReviewAll = () =>{
  return(
      <ul>
        <ReviewCreate/>
        <ReviewComponent/>
      </ul>
  );
};
export default ReviewAll;