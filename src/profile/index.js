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


const Profile = () => {
  const {profile} = useSelector(state => state.profile);
  const [userIsProfileHolder, setUserIsProfileHolder] = useState(true); // Only for production: if true, can see private profile.
  const dispatch = useDispatch();
  // useEffect(() => {dispatch()}, []); // TODO: load when first render

  const joindayArray = profile.dateJoined.split("/");
  const birthdayArray = profile.dateOfBirth.split("/");
  const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
      <div>
        <div>Is this the user?</div>
        <div><input type="radio" className="form-check-input" name="isUser" id="isUser" onClick={() => setUserIsProfileHolder(true)}/><label htmlFor="isUser">Is User</label></div>
        <div><input type="radio" className="form-check-input" name="isUser" id="isNotUser" onClick={() => setUserIsProfileHolder(false)}/><label htmlFor="isNotUser">Not User</label></div>

        <div>
          <div className="d-flex flex-wrap align-items-center row">
            <div className="col-1">
              <Link to="/"><i className="bi bi-arrow-left-circle-fill fa-2x"></i></Link>
            </div>
            <div className="col-11">
              <h3 className="mb-0 fw-bolder">{profile.username}</h3>
            </div>
          </div>
          <img src={profile.bannerPicture} height={200} alt={profile.bannerPicture} className="w-100 rounded-1 mt-1 wd-object-fit-cover-image"/>
          <div>
            <img src={profile.profilePicture} height={150} width={150} alt={profile.profilePicture} className="rounded-2 ms-3 wd-profile-image"/>
            {
              userIsProfileHolder && <Link to="/edit-profile"><button className="btn btn-primary float-end rounded-pill mt-2 me-2">Update Your Profile</button></Link>
            }

          </div>
          <div className="wd-nudge-down-m">
            <p>{profile.bio}</p>
            <span className="me-3"><i className="bi bi-calendar3 me-1"></i>Joined {months[joindayArray[0]] + " " + joindayArray[1]}</span>
            <span className="me-3"><i className="bi bi-geo-alt me-1"></i>{profile.location}</span>
            <span className="me-3"><i className="bi bi-balloon me-1"></i>Born {months[parseInt(birthdayArray[0])] + " " + parseInt(birthdayArray[1]) + ", " + birthdayArray[2]}</span>
          </div>
          <div className="wd-nudge-down-s">
            <div className="row">
              <div className="col-3">
                <ProfileNavbar/>
              </div>
              <div className="col-6">
                <Routes>
                  <Route index element={<RecentActivity/>}/>
                  <Route path="home" element={<RecentActivity/>}/>
                  <Route path="review" element={<Review/>}/>
                  <Route path="following" element={<Following/>}/>
                  <Route path="followers" element={<Follower/>}/>
                  <Route path="friends" element={<Friend/>}/>
                </Routes>
              </div>
              <div className="col-3">
                About this person
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