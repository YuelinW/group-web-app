import React from "react";
import RestaurantSummaryList from "../restaurant-summary-list";
import "../index.css";

const HomeComponent = () => {
  return (
      <>
        <div className="container">
          <div className="position-relative">
          <img width="100%" src="https://user-images.githubusercontent.com/113388766/204441307-73932aa8-c8fc-40df-b0dc-9f89fe2622b1.jpg" alt="home banner"/>
          <h1 className="text-primary position-absolute wd-nudge-up-2" ><i className="bi-balloon"></i>Hi! Welcome to Yealp!</h1>
          <h6 className="position-absolute wd-nudge-up-3">Everyone's Review and Recommendation of Best Restaurants...</h6>
            <a href="/search" className="position-absolute btn btn-primary btn-block rounded-pill wd-nudge-up-4">
              Start the journey
            </a>
          </div>
        </div>
      </>
  );
};
export default HomeComponent;