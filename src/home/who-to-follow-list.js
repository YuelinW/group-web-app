import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import WhoToFollowItem from "./who-to-follow-item";
import {findAllUsersThunk} from "../users/users-thunks";

const WhoToFollowList = () => {
  const {users, loading} = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findAllUsersThunk())}, []);
  return(
      <div>
        <ul className="list-group mt-4">
          <li className="list-group-item bg-primary">
            <h5 className="fw-bold text-white text-md-center">New Members to Follow</h5>
          </li>
          {
              loading &&
              <li className="list-group-item">
                Loading...
              </li>
          }
          {
            users &&
              users.map(who =>
                <WhoToFollowItem
                    key={who._id}
                    who={who}/>)
          }
        </ul>
      </div>
  );
};

export default WhoToFollowList;