import React from "react";
import RestaurantSummaryList from "../restaurant-summary-list";

const HomeComponent = () => {
  return (
      <ul>
        <img className="mb-3" width="100%" height={450} src="https://user-images.githubusercontent.com/113388766/203717006-74332923-6343-47c6-ac4e-cd6e5b7bd1f1.png" alt="logo"/>
        <RestaurantSummaryList/>
      </ul>
  );
};
export default HomeComponent;