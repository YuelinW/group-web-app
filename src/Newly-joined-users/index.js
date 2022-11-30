import React from "react";
import NewlyJoinedUserItem from "./newly-joined-user-item";
import userArray from "./user.json";

const NewlyJoinedUsersList = () => {
  return(
      <ul className="list-group">
        <li className="list-group-item">
          <h3>Newly Joined Friends</h3>
        </li>
        {
          userArray.map(user =>
              <NewlyJoinedUserItem
                  key={user._id}
                  user={user}/>
          )
        }
      </ul>
  );
};
export default NewlyJoinedUsersList;