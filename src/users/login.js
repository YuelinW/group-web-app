import React, {useState}  from "react";
import "./index.css";
import {Link} from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return(
      <div className="d-flex justify-content-center">
        <form className="wd-auth-form">
          <div className="wd-auth-form-content">
            <h3 className="wd-auth-form-title">Log In</h3>
            <div className="form-group">
              <h6 className="mt-4 fw-bold">Select your role</h6>
              <div className="form-check">
                <input className="form-check-input" type="radio"
                       name="roleOptions" id="optionCustomer" value={role}/>
                <label className="form-check-label" for="optionCustomer">
                  Customer
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"
                       name="roleOptions" id="optionRestaurantOwner" value={role}/>
                <label className="form-check-label" for="optionRestaurantOwner">
                  Restaurant Owner
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"
                       name="roleOptions" id="optionAdmin" value={role}/>
                <label className="form-check-label" for="optionAdmin">
                  Admin
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="userName"
                     className="form-label mt-4 fw-bold">Username</label>
              <input type="text" className="form-control"
                     id="userName" placeholder="Username" value={username}/>
            </div>
            <div className="form-group">
              <label for="password" className="form-label mt-2 fw-bold">Password</label>
              <input type="password" className="form-control"
                     id="password" placeholder="Password" value={password}/>
            </div>
            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary fw-bold">
                Log In
              </button>
            </div>
          </div>
          <div className="wd-sign-up-box">
            <span className="mt-4 fw-bold me-2">Don't have an account yet?</span>
            <Link to="/register" className="mt-4 fw-bold text-info">Sign up</Link>
          </div>
        </form>
      </div>
  );
};

export default Login;