import React from "react";

const ProfileAbout = ({profile}) => {
  const joindayArray = profile.dateJoined.split("/");
  const birthdayArray = profile.dateOfBirth.split("/");
  const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
      <>
        <h3 className="fw-bold text-primary pb-3">About {profile.username}</h3>
        <h5 className="fw-bold"><i className="bi bi-geo-alt me-2"></i>Location</h5>
        <div className="me-3 pb-3">{profile.location}</div>
        <h5 className="fw-bold"><i className="bi bi-calendar2-heart me-2"></i>Birthday</h5>
        <div className="me-3 pb-3">{months[parseInt(birthdayArray[0])] + " " + parseInt(birthdayArray[1]) + ", " + birthdayArray[2]}</div>
        <h5 className="fw-bold"><i className="bi bi-calendar3 me-2"></i>Sharing Since</h5>
        <div className="me-3 pb-3">{months[joindayArray[0]] + " " + joindayArray[1]}</div>
        <h5 className="fw-bold"><i className="bi bi-balloon-heart me-2"></i>Things I Love</h5>
        <div className="me-3 pb-3">{profile.bio}</div>
      </>
  );
};
export default ProfileAbout;
