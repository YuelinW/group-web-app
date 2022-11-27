import React, {useEffect, useState} from "react";
import * as service from "../../restaurant/restaurants-service";
import {Link} from "react-router-dom";

const RestaurantInfo = ({restaurantID}) => {
  const [singleRestaurant, setSingleRestaurant] = useState(null);
  useEffect(() => {
    service.findRestaurantByRestaurantID(restaurantID)
    .then(res => setSingleRestaurant(res))
    .catch(() => {setSingleRestaurant(null)})
  }, []);

  return (
      <div className="list-group" key={restaurantID}>
        {singleRestaurant &&
        <>
          <div><Link to={`/details/${restaurantID}`}>Restaurant: {singleRestaurant.name}</Link><span className="ps-3">Price: {singleRestaurant.price}</span></div>
        </>
        }
      </div>
  );
};
export default RestaurantInfo;