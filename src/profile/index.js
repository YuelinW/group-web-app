import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Review from "./profile-content/review";
import Following from "./profile-content/following";
import Follower from "./profile-content/follower";
import Friend from "./profile-content/friend";
import BasicInfo from "./profile-content/basic-info";
import ProfileHeader from "./profile-header";
import ProfileAbout from "./profile-about";
import ProfileNavbar from "./profile-navbar";
import RestaurantList from "./profile-content/restaurant-list";
import AdvertisementList from "./profile-content/advertisement-list";
import PostAdvertisement from "./profile-content/post-advertisement";
import ReviewList from "./profile-content/review-list";
import UserList from "./profile-content/user-list";

const Profile = () => {
  const profile = useSelector(state => state.users.currentUser);
  const [activeComponent, setActiveComponent] = useState('basic'); // all roles start with basic

  return (
      <div className="mt-2 mb-2">
        {profile &&
            <div>
              <ProfileHeader profile={profile}/>
              <div className="wd-nudge-up">
                <div className="row">
                  <ProfileNavbar role={profile.role} setActiveComponent ={setActiveComponent}/>
                  <div className="col-10 col-md-7 col-lg-8 col-xl-6">
                    {(activeComponent === 'basic') && <BasicInfo profile={profile}/>}
                    {(activeComponent === 'review') && <Review profile={profile}/>}
                    {(activeComponent === 'following') && <Following profile={profile}/>}
                    {(activeComponent === 'follower') && <Follower profile={profile}/>}
                    {(activeComponent === 'friend') && <Friend profile={profile}/>}
                    {(activeComponent === 'restaurant') && <RestaurantList profile={profile}/>}
                    {(activeComponent === 'ad') && <AdvertisementList profile={profile}/>}
                    {(activeComponent === 'post') && <PostAdvertisement profile={profile}/>}
                    {(activeComponent === 'userList') && <UserList profile={profile}/>}
                    {(activeComponent === 'reviewList') && <ReviewList profile={profile}/>}
                  </div>
                  <div className="d-none d-md-block col-md-3 col-lg-3">
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