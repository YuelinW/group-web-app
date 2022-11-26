import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import RecentActivity from "./profile-content/recent-activity";
import Review from "./profile-content/review";
import Following from "./profile-content/following";
import Follower from "./profile-content/follower";
import Friend from "./profile-content/friend";
import BasicInfo from "./profile-content/basic-info";
import ProfileHeader from "./profile-header";
import ProfileAbout from "./profile-about";
import NotLoggedIn from "./not-logged-in";
import ProfileNavbar from "./profile-navbar";
import AddRestaurant from "./profile-content/add-restaurant";
import RestaurantList from "./profile-content/restaurant-list";
import AdvertisementList from "./profile-content/advertisement-list";
import PostAdvertisement from "./profile-content/post-advertisement";
import Partner from "./profile-content/partner";
import ResList from "./profile-content/res-list";
import UserList from "./profile-content/user-list";


const Profile = () => {
  const {profile} = useSelector(state => state.profile);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Only for production: if true, can see private profile.
  const dispatch = useDispatch();
  // useEffect(() => {dispatch()}, []); // TODO: load when first render


  const [activeComponent, setActiveComponent] = useState('basic'); // all roles start with basic

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
                  <ProfileNavbar role={profile.role} setActiveComponent ={setActiveComponent}/>
                  <div className="col-10 col-md-7 col-lg-8 col-xl-6">
                    {(activeComponent === 'basic') && <BasicInfo profile={profile}/>}
                    {(activeComponent === 'activity') && <RecentActivity profile={profile}/>}
                    {(activeComponent === 'review') && <Review profile={profile}/>}
                    {(activeComponent === 'following') && <Following profile={profile}/>}
                    {(activeComponent === 'follower') && <Follower profile={profile}/>}
                    {(activeComponent === 'friend') && <Friend profile={profile}/>}
                    {(activeComponent === 'addRes') && <AddRestaurant profile={profile}/>}
                    {(activeComponent === 'restaurant') && <RestaurantList profile={profile}/>}
                    {(activeComponent === 'ad') && <AdvertisementList profile={profile}/>}
                    {(activeComponent === 'post') && <PostAdvertisement profile={profile}/>}
                    {(activeComponent === 'partner') && <Partner profile={profile}/>}
                    {(activeComponent === 'userList') && <UserList profile={profile}/>}
                    {(activeComponent === 'resList') && <ResList profile={profile}/>}
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