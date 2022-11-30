import {useEffect, useState} from "react";
import * as service from "../restaurant/restaurants-service";

const RestaurantName = ({rid}) => {
  const [singleRestaurant, setSingleRestaurant] = useState(null);
  useEffect(() => {
    service.findRestaurantByRestaurantID(rid)
    .then(res => setSingleRestaurant(res))
    .catch(() => {setSingleRestaurant(null)})
  }, []);

  return ( singleRestaurant &&
      <h3 className="text-primary pt-2 fw-bolder"><i className="bi bi-shop-window me-2"></i>{singleRestaurant.name}</h3>
  );
};
export default RestaurantName;