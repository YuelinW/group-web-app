import React from "react";
import RestaurantSummaryList from "../restaurant-summary-list";
import "./index.css";

const ExploreComponent = () => {
  return (
      <>
        <div className="row">
          <div className="col-11 position-relative">
            <input placeholder="Search Restaurants"
                   className="form-control rounded-pill ps-5"/>
            <i className="bi bi-search position-absolute
                           wd-nudge-up"></i>
          </div>
          <div className="col-1">
            <i className="wd-bottom-4 text-primary float-end bi
                           bi-gear-fill fs-2 position-relative"></i>
          </div>
        </div>
        <ul className="nav nav-pills mb-2">
          <li className="nav-item">
            <a className="nav-link active">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Following</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">NearBy</a>
          </li>
        </ul>
        <RestaurantSummaryList/>
      </>
  );
};
export default ExploreComponent;