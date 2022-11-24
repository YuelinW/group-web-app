import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import React from "react";
import {updateProfileThunk} from "./profile-thunks";
import {updateProfile} from "./profile-reducer";

const EditProfile = () => {
  const {profile} = useSelector(state => state.profile);

  // Reformat date of birth
  let profileBirthdayMonth = profile.dateOfBirth.split("/")[0];
  let profileBirthdayDate = profile.dateOfBirth.split("/")[1];
  if (profileBirthdayMonth.length === 1) {
    profileBirthdayMonth = "0" + profileBirthdayMonth;
  }
  if (profileBirthdayDate.length === 1) {
    profileBirthdayDate = "0" + profileBirthdayDate;
  }
  let profileBirthdayYear = profile.dateOfBirth.split("/")[2];

  const [nameString, setNameString] = useState(profile.firstName + " " + profile.lastName);
  const [bioString, setBioString] = useState(profile.bio);
  const [emailString, setEmailString] = useState(profile.email);
  const [phoneString, setPhoneString] = useState(profile.phone);
  const [passwordString, setPasswordString] = useState(profile.password);
  const [locationString, setLocationString] = useState(profile.location);
  const [birthdateString, setBirthdateString] = useState(profileBirthdayYear + "-" + profileBirthdayMonth + "-" + profileBirthdayDate);
  const [dateInEdit, setDateInEdit] = useState(false);

  const changeName = (event) => {
    setNameString(event.target.value);
  };

  const changeBio = (event) => {
    setBioString(event.target.value);
  };

  const changeEmail = (event) => {
    setEmailString(event.target.value);
  };

  const changePhone = (event) => {
    setPhoneString(event.target.value);
  };

  const changePassword = (event) => {
    setPasswordString(event.target.value);
  };

  const changeLocation = (event) => {
    setLocationString(event.target.value);
  };

  const changeBirthdate = (event) => {
    setBirthdateString(event.target.value);
  };

  const dispatch = useDispatch();
  const saveHandler = () => {
    const birthdateStringArray = birthdateString.split("-");
    const newProfile = {
      firstName: nameString.split(" ")[0],
      lastName: nameString.split(" ")[1],
      email: emailString,
      phone: phoneString,
      password: passwordString,
      bio: bioString,
      location: locationString,
      dateOfBirth: birthdateStringArray[1] + "/" + birthdateStringArray[2] + "/" + birthdateStringArray[0]
    }
    // dispatch(updateProfileThunk(newProfile)); // TODO
    dispatch(updateProfile(newProfile)); // TODO: to be deleted
  };

  return (
      <div className="container w-50">
        <div className="d-flex align-items-center row mt-2 mb-2">
          <div className="col-1">
            <Link to={"/profile"}><i className="bi bi-x-square fa-xl col-1 pt-1 fw-bold text-primary"></i></Link>
          </div>
          <div className="col-4">
            <h3 className="mb-0 fw-bolder text-primary">Edit Profile</h3>
          </div>
          <div className="col-7">
            <Link to="/profile"><button className="btn btn-primary float-end rounded-pill me-2" onClick={() => saveHandler()}>Save</button></Link>
          </div>
        </div>
        <img src={profile.bannerPicture} height={230} alt={profile.bannerPicture} className="w-100 rounded-1 mt-1 wd-object-fit-cover-image"/>
        <div>
          <img src={profile.profilePicture} height={150} width={150} alt={profile.profilePicture} className="rounded-2 ms-3 wd-profile-image"/>
        </div>
        <div className="ms-3 wd-nudge-up">
          <div className="mb-3">
            <label className="ps-1 fa-lg pb-3 text-dark">Name</label>
            <input type="text" className="form-control text-bg-light text-info pt-0" value={nameString}
                   onChange={changeName}/>
          </div>
          <div className="mb-3">
            <label className="ps-1 fa-lg pb-3 text-dark">Email</label>
            <input type="text" className="form-control text-bg-light text-info pt-0" value={emailString}
                   onChange={changeEmail}/>
          </div>
          <div className="mb-3">
            <label className="ps-1 fa-lg pb-3 text-dark">Phone</label>
            <input type="text" className="form-control text-bg-light text-info pt-0" value={phoneString}
                   onChange={changePhone}/>
          </div>
          <div className="mb-3">
            <label className="ps-1 fa-lg pb-3 text-dark">Password</label>
            <input type="password" className="form-control text-bg-light text-info pt-0" value={passwordString}
                   onChange={changePassword}/>
          </div>
          <div className="mb-3">
            <label className="ps-1 fa-lg pb-3 text-dark">Bio</label>
            <textarea type="text" className="form-control text-bg-light text-info pt-0" value={bioString}
                      onChange={changeBio}/>
          </div>
          <div className="mb-3">
            <label className="ps-1 fa-lg pb-3 text-dark">Location</label>
            <input type="text" className="form-control text-bg-light text-info pt-0" value={locationString}
                   onChange={changeLocation}/>
          </div>
          <div className="mb-3">
            <label className="ps-1 fa-lg pb-3 text-dark">Birth date</label>
            {
                !dateInEdit && (<span className="fa-lg text-primary wd-hover-cursor" onClick={() => setDateInEdit(true)}><span className="text-dark"> · </span>Edit</span>)
            }
            {
                !dateInEdit && <input type="text" className="form-control text-bg-light text-info pt-0" value={birthdateString} readOnly/>
            }
            {
                dateInEdit && <input type="date" className="text-bg-light text-info pt-0 ms-2" value={birthdateString} onChange={changeBirthdate}/>
            }
          </div>
        </div>
      </div>)
};
export default EditProfile;