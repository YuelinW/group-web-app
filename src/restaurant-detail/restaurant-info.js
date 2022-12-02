import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findYelpRestaurantsByRestaurantId} from "../restaurant/yelp-api-restaurant-thunk";
import ExploreComponent from "../search/index";
import ReviewAll from "./review-index";
import "./index.css";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {findRestaurantByYelpId, createRestaurant} from "../restaurant/restaurants-thunks";
import NotInDB from "./not-in-DB";
import RestaurantCreate from "./restaurant-create";
import ReviewCreate from "./review-create";

const RestaurantInfo = () => {
  const {yid} = useParams();
  const {restaurants, loading} = useSelector(
      state => state.restaurants)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findYelpRestaurantsByRestaurantId(yid))
  }, [yid])
  // const newRestaurant = {
  //   name: restaurants.name,
  //   image_url: restaurants.image_url,
  //   category: 'restaurants.categories',
  //   url: restaurants.url,
  //   price: restaurants.price,
  //   display_phone: restaurants.display_phone,
  //   owners: [''],
  //   reviews: [''],
  //   yelpID: restaurants.id,
  // }
  // dispatch(createRestaurant(newRestaurant));
  const createRestaurantClickHandler = () => {
    const newRestaurant = {
      name: restaurants.name,
      image_url: restaurants.image_url,
      category: 'restaurants.categories',
      url: restaurants.url,
      price: restaurants.price,
      display_phone: restaurants.display_phone,
      owners: [''],
      reviews: [''],
      yelpID: restaurants.id,
    }
    dispatch(createRestaurant(newRestaurant));
  }
  // console.log("see here")
  // console.log(restaurants.name)
    return (
        <div className="list-group">
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          {
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img className=" wd-object-fit-cover-image" width={450} height={350} src={restaurants.image_url}
                       alt="home banner"/>
                </div>
                <div className="col-6">
                  <div className="text-primary"><h1>{restaurants.name}</h1></div>
                  <div className="list-group">
                    <div className="list-group-item border-0 pt-0 pb-0 text-dark">Price: {restaurants.price}</div>

                    <div className="list-group-item border-0 pt-0 pb-0 text-dark">Phone: {restaurants.display_phone}</div>
                    <div className="list-group-item border-0 pt-0 pb-0 text-dark">Status: {`${restaurants.is_closed ? 'Closed' : 'Open'}`}</div>
                    {/*<div>{restaurants.categories.map(c => (<div key={c.alias}>{c.title}</div>))}</div>*/}
                    <div className="list-group-item border-0 pt-0 pb-0 text-dark">Categories: {restaurants.categories?.map((c, index) => {
                      return (
                          <div className="list-group-item border-0 pt-0 pb-0 text-dark" key={index + "_category"}>{c.title} </div>
                      )
                    })}
                    </div>
                    <div className="list-group-item border-0 pt-0 pb-0 text-dark">Support: {restaurants.transactions?.map((transaction, index) => {
                      return (
                          <i className="bi-check me-2" key={index + "_transaction"}>{transaction}</i>
                      )
                    })}
                    </div>
                    <div className="list-group-item border-0 pt-0 pb-0 text-dark">Address: {restaurants.location?.display_address.map(
                        (location, index) => {
                          return (
                              <div className="ms-2" key={index + "_location"}>{location}</div>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <button
                  className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                  onClick={createRestaurantClickHandler}>
                create
              </button>
            </div>
          }
        </div>

    );
};
export default RestaurantInfo;