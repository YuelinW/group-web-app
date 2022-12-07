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
import {
  findUserByIDThunk,
  increaseUserFollowerCountByUserIDThunk,
  increaseUserFollowingCountByUserIDThunk
} from "../users/users-thunks";
import PostAdvertisement from "./profile-content/post-advertisement";
import {createFollowThunk, findFollowByIDsThunk} from "../follow/follow-thunks";


const ProfileOther = () => {
  const {uid} = useParams();
  const dispatch = useDispatch();
  const {otherUser, currentUser} = useSelector(state => state.users);
  const [follow, setFollow] = useState(true); // default to be already followed and cannot follow again
  useEffect(() => {
    dispatch(findUserByIDThunk(uid))
    .then((o) => {dispatch(findFollowByIDsThunk({followerID: (currentUser ? currentUser._id : o.payload._id), leaderID: o.payload._id}))
    .then(r => {
      if (r.payload) { // there is an existing follow
        setFollow(true)
      } else { // not followed yet, can follow
        setFollow(false)
      }
    })})
  }, [uid])

  const followHandler = () => {
    const followerID = currentUser._id
    const leaderID = otherUser._id
    dispatch(createFollowThunk({followerID, leaderID}))
    dispatch(increaseUserFollowerCountByUserIDThunk(leaderID))
    dispatch(increaseUserFollowingCountByUserIDThunk(followerID))
    dispatch(findUserByIDThunk(uid)) // refresh follower count
    setFollow(true)
  }
  const [activeComponent, setActiveComponent] = useState('basic'); // all roles start with basic

  return (
      <div>
        {otherUser && <>
          <ProfileHeader profile={otherUser}/>
          {
            currentUser && otherUser.role === 'CUSTOMER' && otherUser._id !== currentUser._id && !follow &&
              <button onClick={followHandler} className="btn btn-info btn-lg rounded-3 wd-nudge-up-follow-button">
                <i className="bi bi-person-plus-fill me-2"></i>Follow</button>
          }
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
                {(activeComponent === 'reviewList') && <ReviewList profile={otherUser}/>}
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