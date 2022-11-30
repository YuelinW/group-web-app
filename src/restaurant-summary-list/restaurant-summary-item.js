import React from "react";
import "../index.css";

const RestaurantSummaryItem = (
    {
      restaurants = {
        "_id": 123, "name": "Just Poke", "image_url":"https://user-images.githubusercontent.com/113388766/203698608-b4dd68f5-467c-4bc2-8b0b-5e102ecc3438.jpg", "category":"Hawaiian"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="position-relative mb-2">
          <img src={restaurants.image_url}  height={200} className="wd-object-fit-cover-image" alt="restaurant banner"/>
          <h1 className="position-absolute wd-nudge-up text-white">
            {restaurants.name}</h1>
        </div>
        {/*<div className="row">*/}
        {/*  <div className="col-3">*/}
        {/*    <img height={120} src={restaurants.image_url} alt="poke"/>*/}
        {/*  </div>*/}
        {/*  <div className="col-6">*/}
        {/*    <div><h5>{restaurants.name}</h5></div>*/}
        {/*    <div><h6 className="card-subtitle text-muted">{restaurants.category}</h6></div>*/}
        {/*    /!*<div><h6 className="card-subtitle text-muted">Rating: {restaurants.rating} | Reviews: {restaurants.reviews}</h6></div>*!/*/}
        {/*    /!*<div><small className="text-muted">Location: {restaurants.location}</small></div>*!/*/}
        {/*  </div>*/}
        {/*  <div className="col-2">*/}
        {/*    <a href="#" className="card-link">explore</a>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </li>
  );
};
export default RestaurantSummaryItem;