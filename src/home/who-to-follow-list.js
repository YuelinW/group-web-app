import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import WhoToFollowItem from "./who-to-follow-item";
import {findAllUsersThunk} from "../users/users-thunks";
import {findFollowsByFollowerIDThunk} from "../follow/follow-thunks";

const WhoToFollowList = ({currentUser}) => {
  const DISPLAY_LIMIT = 7;
  const dispatch = useDispatch();
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {dispatch(findAllUsersThunk())
  .then((userPayload) => dispatch(findFollowsByFollowerIDThunk(currentUser._id))
  .then(r => {
    const followList = r.payload.map(follow => follow.leaderID);
    const listToDisplay = userPayload.payload.filter(user => user.role === 'CUSTOMER' && followList.indexOf(user._id) === -1 && user._id !== currentUser._id)
    setDisplayList([...listToDisplay])
  }))}, [])
  return(
      <div>
        <ul className="list-group mt-4">
          <li className="list-group-item bg-primary">
            <h5 className="fw-bold text-white text-md-center">New Members</h5>
          </li>
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