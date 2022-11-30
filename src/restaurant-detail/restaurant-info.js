import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findYelpRestaurantsByRestaurantId} from "../restaurant/yelp-api-restaurant-thunk";
import ExploreComponent from "../search/index";
import ReviewAll from "./review-index";
import "./index.css";
import {Link} from "react-router-dom";

const RestaurantInfo = () => {
  let params = (new URL(document.location)).searchParams;
  let inputId = params.get("id");
  const {restaurants, loading} = useSelector(
      state => state.restaurants)
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findYelpRestaurantsByRestaurantId(inputId))}, [])
  console.log('see here')
  console.log(restaurants.categories)
  return (
      <ul className="list-group">
        {
          loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          <div className="container">
            <div className="row">
              <div className="col-3">
              <img className="food1" src={restaurants.image_url} alt="home banner"/>
              </div>
              <div className="col-9">
                <div><h1>{restaurants.name}</h1></div>
                <div>Price: {restaurants.price}</div>

                <div>Phone: {restaurants.display_phone}</div>
                <div>Status: {`${restaurants.is_closed ? 'Closed' : 'Open'}`}</div>
                {/*<div>{restaurants.categories.map(c => (<div key={c.alias}>{c.title}</div>))}</div>*/}
                <div>Categories: {restaurants.categories?.map(c => {
                  return(
                      <>{c.title} </>
                  )
                })}
                </div>
                <div>Support: {restaurants.transactions?.map(transaction=>{
                  return (
                      <i className="bi-check me-2">{transaction}</i>
                  )
                })}
                </div>
                <div>Address: {restaurants.location?.display_address.map(location=>{
                return(
                    <div className="ms-2">{location} </div>
                )
                })}
                </div>
              </div>
            </div>
          </div>
        }
      </ul>

  );
};
export default RestaurantInfo;