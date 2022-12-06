import React, {useEffect} from "react";
import dateFormat from "dateformat";
import {useState} from "react";
import * as service from "../follow/follow-service";

const ProfileAbout = ({profile}) => {
  const [following, setFollowing] = useState([]);
  const [follower, setFollower] = useState([]);
  useEffect(() => {
    service.findFollowsByFollowerID(profile._id)
    .then(res => setFollowing(res))
    .catch(() => setFollowing(null))
  }, [profile]);

  useEffect(() => {
    service.findFollowsByLeaderID(profile._id)
    .then(res => setFollower(res))
    .catch(() => setFollower(null))
  }, [profile]);

  return (
      <div className="bg-light p-3 rounded-3">
        <h3 className="fw-bold text-primary pb-3">About {profile.username}</h3>
        <h5 className="fw-bold"><i className="bi bi-geo-alt me-2"></i>Location</h5>
        <div className="me-3 pb-3">{profile.location}</div>
        {
          profile.role === 'CUSTOMER' && <>
              <h5 className="fw-bold"><i className="bi bi-person-fill-check me-2"></i>Following</h5>
              <div className="me-3 pb-3">{following.length}</div>
            </>
        }
        {
            profile.role === 'CUSTOMER' && <>
              <h5 className="fw-bold"><i className="bi bi-person-fill-down me-2"></i>Followers</h5>
              <div className="me-3 pb-3">{follower.length}</div>
            </>
        }
        <h5 className="fw-bold"><i className="bi bi-calendar3 me-2"></i>Joined Since</h5>
        <div className="me-3 pb-3">{dateFormat(profile.dateJoined, "mmmm yyyy")}</div>
        <h5 className="fw-bold"><i className="bi bi-balloon-heart me-2"></i>Things I Love</h5>
        <div className="me-3 pb-3">{profile.bio}</div>
      </div>
  );
};
export default ProfileAbout;
