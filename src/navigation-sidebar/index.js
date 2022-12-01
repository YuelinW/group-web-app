import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import "../index.css";
import "./index.css";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[1];
  return (
        <div className="mt-2 mb-2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-default fixed-top">
          <div className="ms-4 container-fluid">
            <a className="navbar-brand">Yealp</a>
            <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className={`nav-link ${active === 'home'?'active':''}`} to="/home">Home
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/search" className={`nav-link ${active === 'search'?'active':''}`}>Search</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${(active === 'profile' || active === 'edit-profile')?'active':''}`} to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${active === 'login'?'active':''}`} href="/login">Login</a>
                </li>
              </ul>
              <div className="me-4">
                <a>follow us</a><i className="ms-2 me-2 bi-instagram"></i><i className="me-2 bi-facebook"></i><i className="bi-tiktok"></i>
              </div>
            </div>
          </div>
        </nav>
        </div>
  )
};
export default NavigationSidebar;