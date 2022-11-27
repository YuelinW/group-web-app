import './App.css';
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import Profile from "./profile";
import Login from "./users/login";
import Register from "./users/register";
import usersReducer from "./users/users-reducer";
import {Provider} from "react-redux";
import CurrentUser from "./users/current-user";
import UserList from "./users";

const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

function App() {
  return (
      <div className="container mt-4 mb-4">
        <Provider store={store}>
          <CurrentUser>
            <BrowserRouter>
              <Routes>
                <Route path="/users" element={<UserList/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Routes>
            </BrowserRouter>
          </CurrentUser>
        </Provider>
      </div>
  );
}

export default App;
