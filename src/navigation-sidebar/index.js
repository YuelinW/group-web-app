import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "../index.css";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../users/users-thunks";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[1];
  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.users)
  const handleLogoutBtn = () => {
    dispatch(logoutThunk())
  }
  return (
        <div className="mt-2 mb-2">
        <nav className="navbar navbar-expand navbar-dark bg-primary navbar-default fixed-top">
          <div className="ms-4 container-fluid">
            <Link to="/home" className="navbar-brand">Yealp</Link>
            <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                {
                  (!currentUser || currentUser.role === "OWNER" || currentUser.role === "CUSTOMER" || currentUser.role === 'ADMIN') &&
                  <li className="nav-item">
                    <Link className={`nav-link ${active === 'home' ? 'active'
                        : ''}`} to="/home">Home
                    </Link>
                  </li>
                }
                <li className="nav-item">
                  <Link to="/search" className={`nav-link ${(active === 'search' || active === 'details')?'active':''}`}>Search</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${(active === 'profile' || active === 'edit-profile')?'active':''}`} to="/profile">Profile</Link>
                </li>
                {
                    !currentUser &&
                      <li className="nav-item">
                        <Link to="/login" className={`nav-link ${active === 'login' ? 'active'
                            : ''}`}>Login</Link>
                      </li>
                }
                {
                  currentUser &&
                    <li className="nav-item">
                      <Link to="/home" className="nav-link"><div onClick={handleLogoutBtn}>Logout</div></Link>
                    </li>
                }
              </ul>
              <div className="me-4 d-none d-sm-block">
                <span>follow us</span><i className="ms-2 me-2 bi-instagram"></i><i className="me-2 bi-facebook"></i><i className="bi-tiktok"></i>
              </div>
            </div>
          </div>
        </nav>
        </div>
  )
};
export default NavigationSidebar;