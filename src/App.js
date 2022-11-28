import './App.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import Profile from "./profile";
import {Provider} from "react-redux";
import profileReducer from "./profile/profile-service/profile-reducer";
import EditProfile from "./profile/edit-profile";
import ProfileOther from "./profile/profile-other";
import userActivityReducer
  from "./profile/profile-service/user-activity-reducer";
import restaurantsReducer from "./restaurant/restaurants-reducer";
import advertisementsReducer from "./advertisement/advertisements-reducer";
import Login from "./users/login";
import Register from "./users/register";
import usersReducer from "./users/users-reducer";
import CurrentUser from "./users/current-user";
import ProtectedRoute from "./users/protected-route";

const store = configureStore({
  reducer: {users: usersReducer, profile: profileReducer, userActivity: userActivityReducer, restaurants: restaurantsReducer, advertisements: advertisementsReducer}
});

function App() {
  return (
      <div className="container mt-4 mb-4">
        <Provider store={store}>
          <CurrentUser>
            <BrowserRouter>
              <Routes>
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
            </BrowserRouter>
          </CurrentUser>
        </Provider>
      </div>
  );
}

export default App;
