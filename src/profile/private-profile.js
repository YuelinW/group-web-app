import React from "react";


const PrivateProfile = ({profile}) => {
  return (
      <div className="ms-3">
        <h1>Private</h1>
        <h5 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h5>
        <div className="text-secondary">{profile.username}</div>
        <div className="mt-3">
        </div>
        <div className="mt-3">
          <span className="me-3"><span className="fw-bold text-white">{profile.followingCount}</span> Following</span>
          <span className="fw-bold text-white">{profile.followersCount}</span> Followers
        </div>
      </div>
  );
};

export default PrivateProfile;