import React from "react";
// import {Link} from "react-router-dom";
// import {useLocation} from "react-router";

const NavigationSidebar = () => {
  // const {pathname} = useLocation();
  // const paths = pathname.split('/')
  // const active = paths[1];
  return (
      <>
        <div className="list-group">
          <img height={100} src="https://user-images.githubusercontent.com/113388766/203717920-a7b8176c-6402-436e-ae68-973ec3bd953e.png"/>
          <a className="list-group-item">Home</a>
          <a className="list-group-item">Explore</a>
          <a className="list-group-item">Profile</a>

          {/*<Link to="/home" className={`list-group-item ${active === 'home'?'active':''}`}>*/}
          {/*  Home*/}
          {/*</Link>*/}
          {/*<Link to="/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>*/}
          {/*  Explore*/}
          {/*</Link>*/}
        </div>
        <div className="d-grid mt-2">
          <a href="/login" className="btn btn-primary btn-block rounded-pill">
            Log in/Register
          </a>
        </div>
      </>
  )
};
export default NavigationSidebar;