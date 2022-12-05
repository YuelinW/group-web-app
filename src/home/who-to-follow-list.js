import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import WhoToFollowItem from "./who-to-follow-item";
import {findAllUsersThunk} from "../users/users-thunks";
import {findFollowsByFollowerID} from "../follow/follow-service";

const WhoToFollowList = () => {
  const {users, currentUser, loading} = useSelector((state) => state.users);
  const DISPLAY_LIMIT = 7;
  const dispatch = useDispatch();
  const [displayList, setDisplayList] = useState(null);
  const [alreadyFollowing, setAlreadyFollowing] = useState(null);
  useEffect(() => {
    dispatch(findAllUsersThunk()).then(() => {
      findFollowsByFollowerID(currentUser._id).then(r => setAlreadyFollowing(r.map(follow => follow.leaderID)));
      // displayList contains up to 7 new members that are not yet followed by currentUser
      if (alreadyFollowing || alreadyFollowing.length > 0) {
        setDisplayList(users.filter(user => alreadyFollowing.indexOf(user._id) === -1));
      } else {
        setDisplayList(users)
      }
    })
  }, []);

  return(
      <div>
        <ul className="list-group mt-4">
          <li className="list-group-item bg-primary">
            <h5 className="fw-bold text-white text-md-center">New Members</h5>
          </li>
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          {
              displayList &&
              displayList.slice(0, displayList.length <= DISPLAY_LIMIT ? displayList.length : DISPLAY_LIMIT).map(who =>
                <WhoToFollowItem
                    key={who._id}
                    who={who}/>)
          }
        </ul>
      </div>
  );
};

export default WhoToFollowList;