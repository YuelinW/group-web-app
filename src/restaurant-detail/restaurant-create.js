import React from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  findYelpRestaurantsByRestaurantId
} from "../restaurant/yelp-api-restaurant-thunk";
import {createRestaurant} from "../restaurant/restaurants-thunks";

const RestaurantCreate = ({restaurant}) => {
  const dispatch = useDispatch();
  const newRestaurant = {
    name: restaurant.name,
    image_url: restaurant.image_url,
    category: '',
    url: restaurant.url,
    price: restaurant.price,
    diaplay_phone: restaurant.display_phone,
    owners: 'owner',
    reviews: ['', ''],
    yelpID: restaurant.id,
  }
  dispatch(createRestaurant(newRestaurant));
  // return(
  //     {newRestaurant}
  // );
};
export default RestaurantCreate;