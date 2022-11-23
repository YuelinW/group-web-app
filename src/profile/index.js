import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import PrivateProfile from "./private-profile";
import {Link} from "react-router-dom";
import ProfileNavbar from "./profile-navbar";
import {Route, Routes} from "react-router";
import RecentActivity from "./profile-content/recent-activity";
import Review from "./profile-content/review";
import Following from "./profile-content/following";
import Follower from "./profile-content/follower";
import Friend from "./profile-content/friend";
import BasicInfo from "./profile-content/basic-info";
import ProfileHeader from "./profile-header";
import ProfileAbout from "./profile-about";


const Profile = () => {
  const {profile} = useSelector(state => state.profile);
  const [userIsProfileHolder, setUserIsProfileHolder] = useState(true); // Only for production: if true, can see private profile.
  const dispatch = useDispatch();
  // useEffect(() => {dispatch()}, []); // TODO: load when first render

  const [activeComponent, setActiveComponent] = useState("basic");

  return (
      <div>
        <div>Is this the user?</div>
        <div><input type="radio" className="form-check-input" name="isUser" id="isUser" onClick={() => setUserIsProfileHolder(true)}/><label htmlFor="isUser">Is User</label></div>
        <div><input type="radio" className="form-check-input" name="isUser" id="isNotUser" onClick={() => setUserIsProfileHolder(false)}/><label htmlFor="isNotUser">Not User</label></div>

        <div>
          <ProfileHeader profile={profile}/>
          <div className="wd-nudge-up">
            <div className="row">
              <div className="col-2 col-md-2 col-lg-1 col-xl-3">
                <div className="btn-group-vertical w-100" role="group" arial-label="Profile Navbar">
                  <input type="radio" className="btn-check btn-primary" name="profile-radio"
                         id="radio-basic" autoComplete="off" defaultChecked onClick={() => setActiveComponent("basic")}/>
                  <label className="btn btn-outline-primary text-start fa-lg p-3"
                         htmlFor="radio-basic"><i className="bi bi-person-circle fa-lg pe-2"></i><span className="d-none d-xl-inline">Basic Information</span></label>
                  <input type="radio" className="btn-check " name="profile-radio"
                         id="radio-activity" autoComplete="off" onClick={() => setActiveComponent("activity")}/>
                  <label className="btn btn-outline-primary text-start fa-lg p-3"
                         htmlFor="radio-activity"><i className="bi bi-activity fa-lg pe-2"></i><span className="d-none d-xl-inline">Recent Activity</span></label>
                  <input type="radio" className="btn-check" name="profile-radio"
                         id="radio-review" autoComplete="off" onClick={() => setActiveComponent("review")}/>
                  <label className="btn btn-outline-primary text-start fa-lg p-3"
                         htmlFor="radio-review"><i className="bi bi-r-square-fill fa-lg pe-2"></i><span className="d-none d-xl-inline">Reviews</span></label>
                  <input type="radio" className="btn-check" name="profile-radio"
                         id="radio-following" autoComplete="off" onClick={() => setActiveComponent("following")}/>
                  <label className="btn btn-outline-primary text-start fa-lg p-3"
                         htmlFor="radio-following"><i className="bi bi-person-fill-check fa-lg pe-2"></i><span className="d-none d-xl-inline">Following</span></label>
                  <input type="radio" className="btn-check" name="profile-radio"
                         id="radio-follower" autoComplete="off" onClick={() => setActiveComponent("follower")}/>
                  <label className="btn btn-outline-primary text-start fa-lg p-3"
                         htmlFor="radio-follower"><i className="bi bi-person-fill-down fa-lg pe-2"></i><span className="d-none d-xl-inline">Followers</span></label>
                  <input type="radio" className="btn-check" name="profile-radio"
                         id="radio-friend" autoComplete="off" onClick={() => setActiveComponent("friend")}/>
                  <label className="btn btn-outline-primary text-start fa-lg p-3"
                         htmlFor="radio-friend"><i className="bi bi-people-fill fa-lg pe-2"></i><span className="d-none d-xl-inline">Friends</span></label>
                </div>
              </div>
              <div className="col-10 col-md-7 col-lg-8 col-xl-6">
                {(activeComponent === 'basic') && <BasicInfo profile={profile}/>}
                {(activeComponent === 'activity') && <RecentActivity/>}
                {(activeComponent === 'review') && <Review/>}
                {(activeComponent === 'following') && <Following/>}
                {(activeComponent === 'follower') && <Follower/>}
                {(activeComponent === 'friend') && <Friend/>}
              </div>

              <div className="d-none d-md-block col-md-3 col-lg-3 bg-light p-3 rounded-3">
                <ProfileAbout profile={profile}/>
              </div>
              {
                  userIsProfileHolder && <PrivateProfile profile={profile}/>
              }
            </div>
          </div>
        </div>
      </div>
  );
};
export default Profile;