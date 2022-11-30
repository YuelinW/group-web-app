import React from "react";

const NewlyJoinedUserItem = (
    {
      user = {
        _id: 123,
        username:"alice666",
        profilePicture:"https://user-images.githubusercontent.com/15254181/203483222-a01e1942-19e4-49c8-b3e3-41dd0ce8b3de.jpg",
        bio:"Foodie. I love sushi, ramen, dumplings. Please follow me!"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" height={48} src={user.profilePicture} alt="profile"/>
          </div>
          <div className="col-8">
            <div className="fw-bold">@{user.username} </div>
            <div><p style={{color:'gray'}}>{user.bio}</p></div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
          </div>
        </div>
      </li>
  );
};
export default NewlyJoinedUserItem;