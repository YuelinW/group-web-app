import React, {useState}  from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import {loginThunk} from "./users-thunks";
import {Navigate} from "react-router";

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {currentUser} = useSelector((state) => state.users)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()
  const handleLoginBtn = async (e) => {
    e.preventDefault();
    if (username === "") {
      setError('Username must be filled')
      return
    }
    if (password === "") {
      setError('Password must be filled')
      return
    }
    setError(null)
    const loginUser = {username, password}
    try {
      await dispatch(loginThunk(loginUser)).unwrap()
    } catch (error) {
      setError('Username and Password do not match')
    }
  }
  if (currentUser) {
    return (<Navigate to={'/profile'}/>)
  }
  return(
      <div className="d-flex justify-content-center">
        <form className="wd-auth-form">
          <div className="wd-auth-form-content">
            <h3 className="wd-auth-form-title">Log In</h3>
            {
                error &&
                <div className="alert alert-danger mt-3 mb-0">
                  {error}
                </div>
            }
            <div className="form-group">
              <label htmlFor="loginUserName"
                     className="form-label mt-4 fw-bold">Username</label>
              <input type="text" className="form-control"
                     id="loginUserName" placeholder="Username" value={username}
                     onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword" className="form-label mt-2 fw-bold">Password</label>
              <input type="password" className="form-control"
                     id="loginPassword" placeholder="Password" value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary fw-bold"
                      onClick={handleLoginBtn}>
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