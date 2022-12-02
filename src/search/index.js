import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
  findYelpRestaurantByRestaurantNameAndLocationThunk,
  findYelpRestaurantsByRestaurantName
} from "../restaurant/yelp-api-restaurant-thunk";
import React from "react";
import RestaurantSummaryList from "../restaurant-summary-list";
import "./index.css";
import RestaurantSummaryItem
  from "../restaurant-summary-list/restaurant-summary-item";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import "./index.css";
import {createRestaurant} from "../restaurant/restaurants-thunks";

const ExploreComponent = () => {
  const dispatch = useDispatch()
  const [error, setError] = useState(null)
  const [searchName, setSearchName] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const {restaurantsFromYelp, loading} = useSelector(state => state.restaurants)
  const searchHandler = () => {
    // make sure both fields are filled
    if (searchName === '') {
      setError('Keyword must be filled. Can be a restaurant name such as "Din Tai Fung"')
      return
    }
    if (searchLocation === '') {
      setError('Location must be filled. Can be a city name such as "Bellevue"')
      return
    }
    setError(null)
    const compoundObject = {rname: searchName, rlocation: searchLocation}
    dispatch(findYelpRestaurantByRestaurantNameAndLocationThunk(compoundObject))
  }

  // let navigate = useNavigate();
  // const routeChange = (id) => {
  //   let path = `../details?id=`;
  //   navigate(path + id);
  // }
  // const exploreClickHandler = (restaurant) => {
  //   const newRestaurant = {
  //     name: restaurant.name,
  //     image_url: restaurant.image_url,
  //     category: [],
  //     url: restaurant.url,
  //     price: restaurant.price,
  //     diaplay_phone: restaurant.display_phone,
  //     owners: [],
  //     reviews: [],
  //     yelpID: restaurant.id
  //   }
  //   dispatch(createRestaurant(newRestaurant));
  // }
  // console.log('newrestaurant')
  // console.log(newRestaurant)
  return (
      <>
        <div className="list-group">
          {
              !loading &&
              <div className="container">
                <div className="row position-relative d-flex justify-content-center">
                  {error && <div
                      className="w-75 alert alert-danger mt-3 mb-4 row d-flex justify-content-center">
                    {error}
                  </div>
                  }
                  <div className="w-75 form-floating">

                    <input placeholder="Enter Keywords"
                           className="form-control ps-5 mb-3"
                           onChange={(e) => {
                             setSearchName(e.target.value)
                           }}
                           value={searchName}/>
                    <label htmlFor="floatingInput">Enter Keywords</label>
                  </div>
                  <div className="w-75 form-floating">
                    <input placeholder="Enter Location"
                           className="form-control ps-5"
                           onChange={(e) => {
                             setSearchLocation(e.target.value)
                           }}
                           value={searchLocation}/>
                    <label htmlFor="floatingInput">Enter Location</label>
                  </div>
                  <div className="w-75 mt-3">
                    <button
                        className="btn btn-primary float-start"
                        onClick={searchHandler}>Search
                    </button>
                  </div>
                </div>
              </div>
          }
          <br/>
          {
              loading && <div className="list-group-item">Loading...</div>
          }
          {
              restaurantsFromYelp && restaurantsFromYelp.businesses && restaurantsFromYelp.businesses.map(restaurant =>
                  <li key={restaurant.id}
                      className="card bg-light mb-3 list-group-item">
                    <div className="row">
                      <div className="container col-2 col-lg-2 col-md-2 col-sm-2">
                        <img className="wd-object-fit-cover-image" width={300} height={200}
                             src={restaurant.image_url} alt="poke"/>
                      </div>
                      <div className="ms-3 col-5 col-lg-5 col-md-5 col-sm-5">
                        <div className="card-header mb-3"><i
                            className="bi-house-fill me-2"></i> {restaurant.name}
                        </div>
                        <div className="card-text text-muted mb-3">Price: {restaurant.price}</div>
                        <div><h6
                            className="card-text text-muted">Categories: {restaurant.categories.map(
                            c => (<li key={c.alias}>{c.title}</li>))}</h6></div>
                      </div>
                      <div className="col-2 col-lg-2 col-md-2 col-sm-2">
                        <Link
                            to={`/details/${restaurant.id}`}
                            //   onClick={exploreClickHandler({restaurant})}
                            type="button" className="btn btn-primary">
                          Details
                        </Link>
                      </div>
                    </div>
                  </li>
              )
          }
        </div>
      </>
  );
};
export default ExploreComponent;