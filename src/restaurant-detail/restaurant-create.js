import React from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  findYelpRestaurantsByRestaurantId
} from "../restaurant/yelp-api-restaurant-thunk";
import {createRestaurantThunk} from "../restaurant/restaurants-thunks";

const RestaurantCreate = ({restaurant}) => {
  const dispatch = useDispatch();
  let newRestaurant = null;
  if (restaurant) {
    newRestaurant = {
      name: restaurant.name,
      image_url: restaurant.image_url,
      category: restaurant.categories[0].title,
      url: restaurant.url,
      price: restaurant.price,
      display_phone: restaurant.display_phone,
      owners: [],
      reviews: [],
      yelpID: restaurant.id,
    };
  }
  dispatch(createRestaurantThunk(newRestaurant));
};
export default RestaurantCreate;