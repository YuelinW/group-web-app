import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findYelpRestaurantsByRestaurantName} from "../restaurant/yelp-api-restaurant-thunk";
import React from "react";
import RestaurantSummaryList from "../restaurant-summary-list";
import "./index.css";
import RestaurantSummaryItem
  from "../restaurant-summary-list/restaurant-summary-item";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import "./index.css";
import {createRestaurant} from "../restaurant/restaurants-thunks";

const generatePrice = (price) => {
  let result = '';
  const singlePrice = '<i class="bi bi-currency-dollar text-primary"></i>';
  for (let i = 0; i < price.length; i++) {
    result = result + singlePrice;
  }
  return result;
}

const ExploreComponent = () => {
  const [searchTerm, setSearchTerm] = useState('popular')
  const {restaurants, loading} = useSelector((state) => state.restaurants)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(findYelpRestaurantsByRestaurantName(searchTerm))
  }, [])
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
        <ul className="list-group">
          <div className="row">
            <div className="col-10 position-relative">
              <input placeholder="Search Restaurants by Category"
                     className="form-control rounded-pill ps-5"
                     onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
                     value={searchTerm}/>
              <i className="bi bi-search position-absolute
                           wd-nudge-up"></i>
            </div>
            <div className="col-2">
              <button
                  className="btn btn-primary float-end"
                  onClick={() => {
                    dispatch(findYelpRestaurantsByRestaurantName(searchTerm.replaceAll(' ', '+')))
                  }}>Search by Name
              </button>
            </div>
          </div>
          <br/>
          {
            restaurants.businesses && restaurants.businesses.map(restaurant =>
                  <li key={restaurant.id} className="card bg-light mb-3 list-group-item">
                    <div className="row">
                      <div className="container col-2 col-lg-2 col-md-2 col-sm-2">
                        <img className="image-scale" width={300} height={200} src={restaurant.image_url} alt="poke"/>
                      </div>
                      <div className="ms-3 col-5 col-lg-5 col-md-5 col-sm-5">
                        <div className="card-header"><i className="bi-house-fill me-2"></i> {restaurant.name}</div>
                        <br/>
                        <div className="card-text text-muted">Price: <span dangerouslySetInnerHTML={{__html: generatePrice(restaurant.price)}} className="ps-2"></span></div>
                        <br/>
                        <div><h6 className="card-text text-muted">{restaurant.categories.map(c => (<li key={c.alias}>{c.title}</li>))}</h6></div>
                      </div>
                      <div className="col-2 col-lg-2 col-md-2 col-sm-2">
                        <Link
                            to={`/details/${restaurant.id}`}
                            //   onClick={exploreClickHandler({restaurant})}
                              type="button" class="btn btn-primary">
                          Details
                        </Link>
                      </div>
                    </div>
                  </li>
              )

          }
        </ul>
        {/*<div className="row">*/}
        {/*  <div className="col-11 position-relative">*/}
        {/*    <input placeholder="Search Restaurants"*/}
        {/*           className="form-control rounded-pill ps-5"/>*/}
        {/*    <i className="bi bi-search position-absolute*/}
        {/*                   wd-nudge-up"></i>*/}
        {/*  </div>*/}
        {/*  <div className="col-1">*/}
        {/*    <i className="wd-bottom-4 text-primary float-end bi*/}
        {/*                   bi-gear-fill fs-2 position-relative"></i>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<ul className="nav nav-pills mb-2">*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link active">Trending</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link">Following</a>*/}
        {/*  </li>*/}
        {/*  <li className="nav-item">*/}
        {/*    <a className="nav-link">NearBy</a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
        {/*<RestaurantSummaryList/>*/}
      </>
  );
};
export default ExploreComponent;
