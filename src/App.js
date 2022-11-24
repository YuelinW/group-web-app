import './App.css';
import Profile from "./profile";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {Route, Routes} from "react-router";
import profileReducer from "./profile/profile-reducer";
import {BrowserRouter} from "react-router-dom";
import EditProfile from "./profile/edit-profile";


const store = configureStore({
  reducer: {profile: profileReducer}
});

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Provider store={store}>
          <Routes>
            <Route path="/profile/*" element={<Profile/>}></Route>
            <Route path="/edit-profile" element={<EditProfile/>}></Route>
          </Routes>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
