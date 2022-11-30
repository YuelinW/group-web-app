import React from "react";
import {useEffect, useState} from "react";
import * as service from "../../follow/follow-service";
import FriendList from "../../follow/friend-list";

const Friend = ({profile}) => {
  const [followsFollower, setFollowsFollower] = useState([]);
  useEffect(() => {
    service.findFollowsByLeaderID(profile._id)
    .then(res => setFollowsFollower(res))
    .catch(() => setFollowsFollower(null))
  }, [profile]);

  const [followsFollowing, setFollowsFollowing] = useState([]);
  useEffect(() => {
    service.findFollowsByFollowerID(profile._id)
    .then(res => setFollowsFollowing(res))
    .catch(() => setFollowsFollowing(null))
  }, [profile]);

  return (
      <div className="ms-3">
        <h3 className="text-info">Friends</h3>
        <div className="list-group list-group-flush">
          <FriendList followerIDs={followsFollower.map(follow => follow.followerID)} leaderIDs={followsFollowing.map(follow => follow.leaderID)}/>
        </div>
      </div>
  );
};
export default Friend;