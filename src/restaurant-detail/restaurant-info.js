import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findYelpRestaurantsByRestaurantId} from "../restaurant/yelp-api-restaurant-thunk";
import ExploreComponent from "../search";
import ReviewAll from "./review-index";
import "./index.css";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {
  findRestaurantByYelpIdThunk,
  createRestaurantThunk,
  findRestaurantInDetailByYelpIDThunk
} from "../restaurant/restaurants-thunks";
import NotInDB from "./not-in-DB";
import RestaurantCreate from "./restaurant-create";
import ReviewCreate from "./review-create";

const RestaurantInfo = () => {
  const {yid} = useParams();
  const dispatch = useDispatch();
  const {restaurantInDetail, loading} = useSelector(state => state.restaurants); // from our DB
  const {yelpRestaurant, retrieveLoading} = useSelector(state => state.restaurants); // from YelpAPI
  useEffect(() => {
    dispatch(findRestaurantByYelpIdThunk(yid))
    dispatch(findRestaurantInDetailByYelpIDThunk(yid))
  }, [])
  useEffect(() => {
    if (yelpRestaurant && !restaurantInDetail) {
      if (!restaurantInDetail && yelpRestaurant) {
        const newRestaurant = {
          name: yelpRestaurant.name,
          image_url: yelpRestaurant.image_url,
          category: yelpRestaurant.categories[0].title,
          url: yelpRestaurant.url,
          price: yelpRestaurant.price,
          display_phone: yelpRestaurant.display_phone,
          owners: [],
          reviews: [],
          yelpID: yelpRestaurant.id,
        };
        console.log("Creating...")
        dispatch(createRestaurantThunk(newRestaurant))
      }
    }
  }, [yelpRestaurant])


    return (
        <div className="list-group">
          {
              retrieveLoading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          {
            !retrieveLoading && yelpRestaurant &&
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <img className="wd-object-fit-cover-image wd-detail-image" width={450} height={350} src={yelpRestaurant.image_url}
                         alt="home banner"/></div>
                  <div className="col-6">
                    <div className="text-primary"><h1>{yelpRestaurant.name}</h1></div>
                    <div className="list-group">
                      <div className="list-group-item border-0 pt-0 pb-0 text-dark">Price: {yelpRestaurant.price}</div>
                      <div className="list-group-item border-0 pt-0 pb-0 text-dark">Phone: {yelpRestaurant.display_phone}</div>
                      <div className="list-group-item border-0 pt-0 pb-0 text-dark">Status: {`${yelpRestaurant.is_closed ? 'Closed' : 'Open'}`}</div>
                      <div className="list-group-item border-0 pt-0 pb-0 text-dark">Categories: {yelpRestaurant.categories?.map((c, index) =>
                            <div className="list-group-item border-0 pt-0 pb-0 text-dark" key={index + "_category"}>{c.title} </div>)}
                      </div>
                      <div className="list-group-item border-0 pt-0 pb-0 text-dark">Support: {yelpRestaurant.transactions?.map((transaction, index) =>
                            <i className="bi-check me-2" key={index + "_transaction"}>{transaction}</i>)}
                      </div>
                      <div className="list-group-item border-0 pt-0 pb-0 text-dark">Address: {yelpRestaurant.location?.display_address.map(
                          (location, index) => <div className="ms-2" key={index + "_location"}>{location}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
          {!loading && restaurantInDetail && <h1>{restaurantInDetail.name}</h1>}
        </div>
    );
};
export default RestaurantInfo;