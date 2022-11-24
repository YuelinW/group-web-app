import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import PrivateProfile from "./private-profile";
import RecentActivity from "./profile-content/recent-activity";
import Review from "./profile-content/review";
import Following from "./profile-content/following";
import Follower from "./profile-content/follower";
import Friend from "./profile-content/friend";
import BasicInfo from "./profile-content/basic-info";
import ProfileHeader from "./profile-header";
import ProfileAbout from "./profile-about";
import NotLoggedIn from "./not-logged-in";


const Profile = () => {
  const {profile} = useSelector(state => state.profile);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Only for production: if true, can see private profile.
  const dispatch = useDispatch();
  // useEffect(() => {dispatch()}, []); // TODO: load when first render

  const [activeComponent, setActiveComponent] = useState("basic");

  return (
      <div>
        <div>Is the user logged in?</div>
        <div><input type="radio" className="form-check-input me-1" name="isUser" id="isUser" defaultChecked onClick={() => setIsLoggedIn(true)}/><label htmlFor="isUser">Yes</label></div>
        <div><input type="radio" className="form-check-input me-1" name="isUser" id="isNotUser" onClick={() => setIsLoggedIn(false)}/><label htmlFor="isNotUser">No</label></div>
        {
          !isLoggedIn && <NotLoggedIn/>
        }
        {
          isLoggedIn &&
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
                    {(activeComponent === 'activity') && <RecentActivity profile={profile}/>}
                    {(activeComponent === 'review') && <Review profile={profile}/>}
                    {(activeComponent === 'following') && <Following profile={profile}/>}
                    {(activeComponent === 'follower') && <Follower profile={profile}/>}
                    {(activeComponent === 'friend') && <Friend profile={profile}/>}
                  </div>
                  <div className="d-none d-md-block col-md-3 col-lg-3 bg-light p-3 rounded-3">
                    <ProfileAbout profile={profile}/>
                  </div>
                </div>
              </div>
            </div>
        }
      </div>
  );
};
export default Profile;