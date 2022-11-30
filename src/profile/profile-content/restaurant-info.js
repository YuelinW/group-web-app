import React, {useEffect, useState} from "react";
import * as service from "../../restaurant/restaurants-service";
import {Link} from "react-router-dom";

const RestaurantInfo = ({restaurantID}) => {
  const [singleRestaurant, setSingleRestaurant] = useState(null);
  useEffect(() => {
    service.findRestaurantByRestaurantID(restaurantID)
    .then(res => setSingleRestaurant(res))
    .catch(() => {setSingleRestaurant(null)})
  }, [restaurantID]);

  return (
      <div className="list-group" key={restaurantID}>
        {singleRestaurant &&
        <>
          <div><Link to={`/details/${singleRestaurant.yelpID}`}>Restaurant: {singleRestaurant.name}</Link><span className="ps-4">Price: {singleRestaurant.price}</span></div>
        </>
        }
      </div>
  );
};
export default RestaurantInfo;