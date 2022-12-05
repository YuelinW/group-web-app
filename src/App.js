import React from "react";
import './App.css';
import NavigationSidebar from "./navigation-sidebar";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import HomeComponent from "./home";
import ExploreComponent from "./search";
import restaurantReducer from "./restaurant/restaurants-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import reviewsReducer from "./review/review-reducer";
import RestaurantDetail from "./restaurant-detail";
import EditProfile from "./profile/edit-profile";
import ProfileOther from "./profile/profile-other";
import advertisementsReducer from "./advertisement/advertisements-reducer";
import Login from "./users/login";
import Register from "./users/register";
import CurrentUser from "./users/current-user";
import ProtectedRoute from "./users/protected-route";
import usersReducer from "./users/users-reducer";
import Profile from "./profile";
import restaurantsReducer2 from "./restaurant/reducer";
import reviewReducer2 from "./review/review-reducer-2";

const store = configureStore({
  reducer: {
    users: usersReducer,
    restaurants: restaurantReducer,
    restaurantData: restaurantsReducer2,
    advertisements: advertisementsReducer,
    reviews: reviewsReducer,
    reviewData: reviewReducer2
  }
})

function App() {
  return (
      <div className="container mt-4 mb-4">
        <Provider store={store}>
          <BrowserRouter>
              <CurrentUser>
                <div className="mt-4 mb-4">
                  <NavigationSidebar/>
                </div>
                <Routes>
                  <Route index element={<HomeComponent/>}/>
                  <Route path="/home"    element={<HomeComponent/>}/>
                  <Route path="/search" element={<ExploreComponent/>}/>
                  <Route path="/details" element={<RestaurantDetail/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/profile" element={
                    <ProtectedRoute>
                      <Profile/>
                    </ProtectedRoute>
                  }/>
                  <Route path="/profile/:uid" element={<ProfileOther/>}></Route>
                  <Route path="/edit-profile" element={
                    <ProtectedRoute>
                      <EditProfile/>
                    </ProtectedRoute>
                  }/>
                  <Route path="/details/:yid" element={<RestaurantDetail/>}></Route>
                  {/*<Route path="/admin" element={<EditAds/>}></Route>*/}
                </Routes>
              </CurrentUser>
          </BrowserRouter>
        </Provider>
      </div>
  );
}

export default App;