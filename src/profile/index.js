import {useSelector} from "react-redux";
import React from "react";

const Profile = () => {
  const {currentUser} = useSelector((state) => state.users)
  return (
      <>
        <h1>Profile Page</h1>
        {
            currentUser &&
            <h2>Welcome {currentUser.username}</h2>
        }
        <div className="list-group">
          <div className="list-group-item">
            First item
          </div>
          <div className="list-group-item">
            Second item
          </div>
        </div>
        <button className="btn btn-primary">Button</button>
      </>
  );
};
export default Profile;