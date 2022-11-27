import React from "react";
import {useEffect, useState} from "react";
import * as service from "../../follow/follow-service";
import FollowProfile from "../../follow/follow-profile";

const Following = ({profile}) => {
  const [follows, setFollows] = useState([]);
  useEffect(() => {
    service.findFollowsByFollowerID(profile._id)
    .then(res => setFollows(res))
    .catch(() => setFollows(null))
  }, []);

  return (
      <div className="ms-3">
        <h3 className="text-info">Following (sorted from most recent)</h3>
        <div className="list-group list-group-flush">

          {follows.length === 0 && <>This user hasn't follow anyone yet.</>}
          {
              follows && follows.length > 0 && follows.map(follow =>
                  {
                    return (
                        <div key={follow._id} className="list-group-item">
                          <div><FollowProfile profile_ID={follow.leaderID}/></div>
                          <div>Followed on: {follow.time.substring(0, 10)}</div>
                        </div>)
                  }
              )
          }
        </div>
      </div>
  );
};
export default Following;