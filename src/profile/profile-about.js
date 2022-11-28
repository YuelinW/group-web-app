import React from "react";
import dateFormat from "dateformat";

const ProfileAbout = ({profile}) => {
  return (
      <>
        <h3 className="fw-bold text-primary pb-3">About {profile.username}</h3>
        <h5 className="fw-bold"><i className="bi bi-geo-alt me-2"></i>Location</h5>
        <div className="me-3 pb-3">{profile.location}</div>
        {
          profile.role === 'CUSTOMER' && <>
              <h5 className="fw-bold"><i className="bi bi-person-fill-check me-2"></i>Following</h5>
              <div className="me-3 pb-3">{profile.followingCount}</div>
            </>
        }
        {
            profile.role === 'CUSTOMER' && <>
              <h5 className="fw-bold"><i className="bi bi-person-fill-down me-2"></i>Followers</h5>
              <div className="me-3 pb-3">{profile.followersCount}</div>
            </>
        }
        <h5 className="fw-bold"><i className="bi bi-calendar3 me-2"></i>Joined Since</h5>
        <div className="me-3 pb-3">{dateFormat(profile.dateJoined, "mmmm yyyy")}</div>
        <h5 className="fw-bold"><i className="bi bi-balloon-heart me-2"></i>Things I Love</h5>
        <div className="me-3 pb-3">{profile.bio}</div>
      </>
  );
};
export default ProfileAbout;
