import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findAllUsersThunk} from "../../users/users-thunks";
import FollowProfile from "../../follow/follow-profile";

// only viewed by admin users

const UserList = ({profile}) => { // is only visible to the profile owner
  const {users, loading} = useSelector(state => state.users);
  const dispatch = useDispatch();
  useEffect(() => {dispatch(findAllUsersThunk())}, [profile]);

  const {currentUser} = useSelector(state => state.users);
  const isLoggedInAndIsAdmin = (currentUser && currentUser._id === profile._id
      && currentUser.role === 'ADMIN'); // only owner of the Ads can edit it

  return (
      <>
        {
          !isLoggedInAndIsAdmin && <h4 className="text-info">This content is only viewable by the account owner. Please log in to see details of your profile.</h4>
        }
        {
          isLoggedInAndIsAdmin &&
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
        }
      </>
  );
};
export default UserList;