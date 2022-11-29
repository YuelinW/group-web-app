import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import ProfileHeader from "./profile-header";
import ProfileNavbar from "./profile-navbar";
import BasicInfo from "./profile-content/basic-info";
import Review from "./profile-content/review";
import Following from "./profile-content/following";
import Follower from "./profile-content/follower";
import Friend from "./profile-content/friend";
import RestaurantList from "./profile-content/restaurant-list";
import AdvertisementList from "./profile-content/advertisement-list";
import UserList from "./profile-content/user-list";
import ReviewList from "./profile-content/review-list";
import ProfileAbout from "./profile-about";
import {findUserByIDThunk} from "../users/users-thunks";
import PostAdvertisement from "./profile-content/post-advertisement";


const ProfileOther = () => {
  const {uid} = useParams();
  const dispatch = useDispatch();
  const {otherUser} = useSelector(state => state.users);
  useEffect(() => {dispatch(findUserByIDThunk(uid))}, [uid])
  const [activeComponent, setActiveComponent] = useState('basic'); // all roles start with basic

  return (
      <div>
        {otherUser && <>
          <ProfileHeader profile={otherUser}/>
          <div className="wd-nudge-up">
            <div className="row">
              <ProfileNavbar role={otherUser.role} setActiveComponent ={setActiveComponent}/>
              <div className="col-10 col-md-7 col-lg-8 col-xl-6">
                {(activeComponent === 'basic') && <BasicInfo profile={otherUser}/>}
                {(activeComponent === 'review') && <Review profile={otherUser}/>}
                {(activeComponent === 'following') && <Following profile={otherUser}/>}
                {(activeComponent === 'follower') && <Follower profile={otherUser}/>}
                {(activeComponent === 'friend') && <Friend profile={otherUser}/>}
                {(activeComponent === 'restaurant') && <RestaurantList profile={otherUser}/>}
                {(activeComponent === 'ad') && <AdvertisementList profile={otherUser}/>}
                {(activeComponent === 'post') && <PostAdvertisement profile={otherUser}/>}
                {(activeComponent === 'userList') && <UserList profile={otherUser}/>}
                {(activeComponent === 'resList') && <ReviewList profile={otherUser}/>}
              </div>
              <div className="d-none d-md-block col-md-3 col-lg-3">
                <ProfileAbout profile={otherUser}/>
              </div>
            </div>
          </div>
        </>}
      </div>
  );
};
export default ProfileOther;