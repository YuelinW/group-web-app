import React from "react";
import "../index.css";
import AdvertisementPostsList from "./advertisement-posts-list";
import {useSelector} from "react-redux";

const HomeComponent = () => {
  const {currentUser} = useSelector((state) => state.users)
  return (
      <>
        <div className="container">
          <div className="position-relative">
          <img width="100%" src="https://user-images.githubusercontent.com/113388766/204441307-73932aa8-c8fc-40df-b0dc-9f89fe2622b1.jpg" alt="home banner"/>
          <div>
            {
                currentUser &&
                <h1 className="text-primary position-absolute wd-nudge-up-2"><i className="bi-balloon"></i>Hi! Welcome {currentUser.username}</h1>
            }
            {
                !currentUser &&
                <h1 className="text-primary position-absolute wd-nudge-up-2"><i className="bi-balloon"></i>Hi! Welcome to Yealp!</h1>
            }
          </div>
          <h6 className="position-absolute wd-nudge-up-3">Everyone's Review and Recommendation of Best Restaurants...</h6>
            <a href="/search" className="position-absolute btn btn-primary btn-block rounded-pill wd-nudge-up-4">
              Start the journey
            </a>
          </div>
          <AdvertisementPostsList/>
        </div>
      </>
  );
};
export default HomeComponent;