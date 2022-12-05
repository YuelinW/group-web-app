import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import React from "react";
import {useSelector} from "react-redux";

const ProfileHeader = ({profile}) => {
  const {currentUser} = useSelector((state) => state.users)
  const {pathname} = useLocation();
  const paths = pathname.split("/");
  const showEdit = paths.length === 2; // if == 3, then it is ["", "profile", "uid"] and we should not show update button

  return (
      <>
        <div className="d-flex flex-wrap align-items-center row">
          <div className="col-1">
            <Link to="/"><i className="bi bi-arrow-left-circle-fill fa-2x"></i></Link>
          </div>
          <div className="col-11">
            <h3 className="mb-0 fw-bolder text-primary">{profile.username}</h3>
          </div>
        </div>
        <img src={profile.bannerPicture} height={230} alt={profile.bannerPicture} className="w-100 rounded-1 mt-1 wd-object-fit-cover-image"/>
        <div>
          <img src={profile.profilePicture} height={150} width={150} alt={profile.profilePicture} className="rounded-2 ms-3 wd-profile-image"/>
          {
              showEdit && <Link to="/edit-profile"><button className="btn btn-primary float-end rounded-pill mt-3 me-2 text-lg-center">Update Your Profile</button></Link>
          }
          // TODO: follow function
          {/*{*/}
          {/*    currentUser.role === 'CUSTOMER' &&*/}
          {/*    <button type="button"*/}
          {/*            className="btn btn-outline-primary rounded-pill ms-4 mb-4"*/}
          {/*            onClick={() => dispatch(updateFollowsThunk({*/}
          {/*              ...followsInfo,*/}
          {/*              following: followsCount.following + 1*/}
          {/*            }))}>Follow</button>*/}
          {/*}*/}
        </div>
      </>
  );
};
export default ProfileHeader;