import React from "react";
import './App.css';
import NavigationSidebar from "./navigation-sidebar/index.js";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import RestaurantSummaryList from "./restaurant-summary-list/index.js";
import HomeComponent from "./home";

function App() {
  return (
    <BrowserRouter>
      <div className="row mt-5 ms-5">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar/>
        </div>
        <div className="col-7 col-md-7 col-lg-8 col-xl-7">
          <HomeComponent/>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
