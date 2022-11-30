import React from "react";
import './App.css';
import NavigationSidebar from "./navigation-sidebar/index.js";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import RestaurantSummaryList from "./restaurant-summary-list/index.js";
import HomeComponent from "./home";
import ExploreComponent from "./search";
import NewlyJoinedUsersList from "./Newly-joined-users";
import restaurantReducer from "./restaurant/restaurant-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import RestaurantInfo from "./restaurant-detail/restaurant-info";
import reviewsReducer from "./review/review-reducer";
import RestaurantDetail from "./restaurant-detail";
import profileReducer from "./profile/profile-service/profile-reducer";
import EditProfile from "./profile/edit-profile";
import ProfileOther from "./profile/profile-other";
import advertisementsReducer from "./advertisement/advertisements-reducer";
import Login from "./users/login";
import Register from "./users/register";
import CurrentUser from "./users/current-user";
import ProtectedRoute from "./users/protected-route";
import usersReducer from "./users/users-reducer";
import Profile from "./profile";


const store = configureStore(
    {reducer: {users: usersReducer, profile: profileReducer, restaurants: restaurantReducer, advertisements: advertisementsReducer, reviews: reviewsReducer}}
)

function App() {
  return (
        <div className="container mt-4 mb-4">
        <BrowserRouter>
          <Provider store={store}>
            <div className="mt-4 mb-4">
                <NavigationSidebar/>
            </div>
            <Routes>
              <Route index element={<HomeComponent/>}/>
              <Route path="/home"    element={<HomeComponent/>}/>
              <Route path="/search" element={<ExploreComponent/>}/>
              <Route path="/restaurant-detail" element={<RestaurantDetail/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/profile" element={
                // <ProtectedRoute>
                <Profile/>
                // </ProtectedRoute>
              }/>
              <Route path="/profile/:uid" element={<ProfileOther/>}></Route>
              <Route path="/edit-profile" element={
                // <ProtectedRoute>
                <EditProfile/>
                // </ProtectedRoute>
              }/>
              }
            </Routes>
            {/*<div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">*/}
            {/*  <NewlyJoinedUsersList/>*/}
            {/*</div>*/}
          </Provider>
        </BrowserRouter>
        </div>

  );
}

export default App;
