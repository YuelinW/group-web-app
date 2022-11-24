import React from "react";

const RestaurantSummaryItem = (
    {
      restaurants = {
        "_id": 123, "name": "Just Poke", "rating": 4.5, "reviews": 123, "location": "Redmond", "image":"https://user-images.githubusercontent.com/113388766/203698608-b4dd68f5-467c-4bc2-8b0b-5e102ecc3438.jpg", "category":"Hawaiian"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-3">
            <img height={120} src={restaurants.image} alt="poke"/>
          </div>
          <div className="col-6">
            <div><h5>{restaurants.name}</h5></div>
            <div><h6 className="card-subtitle text-muted">{restaurants.category}</h6></div>
            <div><h6 className="card-subtitle text-muted">Rating: {restaurants.rating} | Reviews: {restaurants.reviews}</h6></div>
            <div><small className="text-muted">Location: {restaurants.location}</small></div>
          </div>
          <div className="col-2">
            <a href="#" className="card-link">explore</a>
          </div>
        </div>
      </li>
  );
};
export default RestaurantSummaryItem;