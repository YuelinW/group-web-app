import {useEffect, useState} from "react";
import * as service from "../profile/profile-service/profile-service";
import {Link} from "react-router-dom";

const FollowProfile = ({profile_ID}) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    service.findProfileByProfileID(profile_ID)
    .then(res => setProfile(res))
    .catch(() => setProfile(null))
  }, []);

  // given profile_id, find the profile and display it
  return (
      <div>
        <Link to={`profile/${profile_ID}`}><img src={profile.profilePicture} height={20} width={20}
                        className="rounded-circle me-2"/>{profile.username}</Link>
      </div>
  );
};
export default FollowProfile;