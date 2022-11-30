import FollowProfile from "./follow-profile";
import React from "react";

const FriendList = ({followerIDs, leaderIDs}) => {
  const friendsIDs = followerIDs.filter(id => leaderIDs.indexOf(id) !== -1);
  return (
      <>
        {friendsIDs.length === 0 && <>This user hasn't friends yet.</>}
        {
            friendsIDs && friendsIDs.length > 0 && friendsIDs.map(friendID => {
                  return (
                      <div key={friendID} className="list-group-item">
                        <div><FollowProfile profile_ID={friendID}/></div>
                      </div>)
                }
            )
        }
      </>
  )
};
export default FriendList;