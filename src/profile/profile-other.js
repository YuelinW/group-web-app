import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import ProfileHeader from "./profile-header";
import ProfileNavbar from "./profile-navbar";
import BasicInfo from "./profile-content/basic-info";
import RecentActivity from "./profile-content/recent-activity";
import Review from "./profile-content/review";
import Following from "./profile-content/following";
import Follower from "./profile-content/follower";
import Friend from "./profile-content/friend";
import RestaurantList from "./profile-content/restaurant-list";
import AdvertisementList from "./profile-content/advertisement-list";
import PostAdvertisement from "./profile-content/post-advertisement";
import Partner from "./profile-content/partner";
import UserList from "./profile-content/user-list";
import ReviewList from "./profile-content/review-list";
import ProfileAbout from "./profile-about";
import otherProfileData from "./otherProfile.json";


const ProfileOther = () => {
  // doesn't care of logged in or not. Can always display public info
  const {pathname} = useLocation();
  const paths = pathname.split("/"); // ["", "profile", "uid"]
  const otherProfile = otherProfileData;
  // useEffect(() => dispatch(findProfileByID(paths[2])), []); // TODO: update to use server and db

  const dispatch = useDispatch();
  const [activeComponent, setActiveComponent] = useState('basic'); // all roles start with basic
  // useEffect(() => {dispatch()}, []); // TODO: load when first render. update this to have activeComponent to be "basic"

  return (
      <div>
        <ProfileHeader profile={otherProfile}/>
        <div className="wd-nudge-up">
          <div className="row">
            <ProfileNavbar role={otherProfile.role} setActiveComponent ={setActiveComponent}/>
            <div className="col-10 col-md-7 col-lg-8 col-xl-6">
              {(activeComponent === 'basic') && <BasicInfo profile={otherProfile}/>}
              {/*{(activeComponent === 'activity') && <RecentActivity profile={otherProfile}/>}*/}
              {(activeComponent === 'review') && <Review profile={otherProfile}/>}
              {(activeComponent === 'following') && <Following profile={otherProfile}/>}
              {(activeComponent === 'follower') && <Follower profile={otherProfile}/>}
              {(activeComponent === 'friend') && <Friend profile={otherProfile}/>}
              {/*{(activeComponent === 'addRes') && <AddRestaurant profile={otherProfile}/>}*/}
              {(activeComponent === 'restaurant') && <RestaurantList profile={otherProfile}/>}
              {(activeComponent === 'ad') && <AdvertisementList profile={otherProfile}/>}
              {/*{(activeComponent === 'post') && <PostAdvertisement profile={otherProfile}/>}*/}
              {(activeComponent === 'partner') && <Partner profile={otherProfile}/>}
              {(activeComponent === 'userList') && <UserList profile={otherProfile}/>}
              {(activeComponent === 'resList') && <ReviewList profile={otherProfile}/>}
            </div>
            <div className="d-none d-md-block col-md-3 col-lg-3 bg-light p-3 rounded-3">
              <ProfileAbout profile={otherProfile}/>
            </div>
          </div>
        </div>
      </div>
  );
};
export default ProfileOther;