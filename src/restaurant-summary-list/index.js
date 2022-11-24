import React from "react";
import RestaurantSummaryItem from "./restaurant-summary-item.js";
import resArray from './res.json';

const RestaurantSummaryList = () => {
  return (
      <ul className="list-group">
        {
          resArray.map(restaurants =>
              <RestaurantSummaryItem
                  key={restaurants._id}
                  restaurants={restaurants}/>
          )
        }
      </ul>
  );
};
export default RestaurantSummaryList;