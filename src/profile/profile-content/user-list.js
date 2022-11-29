import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findAllUsersThunk} from "../../users/users-thunks";
import FollowProfile from "../../follow/follow-profile";

const UserList = ({profile}) => {
  const {users, loading} = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findAllUsersThunk())}, [profile]);

  // only admin can view user lists
  return (
      <>
        <div className="ms-3">
          <h3 className="text-info">Users</h3>
          {loading &&
              <div className="list-group-item">
                Loading...
              </div>}
          <div className="list-group list-group-flush">
            {
              users && users.length > 0 && users.map(user => <li className="list-group-item w-50" key={user._id}><FollowProfile profile_ID={user._id}/></li>)
            }
            {
              !loading && users.length === 0 && <>There are 0 users.</>
            }
          </div>
        </div>
      </>
  );
};
export default UserList;