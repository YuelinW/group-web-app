import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import {updateCurrentUserProfileByUserNameThunk} from "../users/users-thunks";
import axios from "axios";

const EditProfile = () => {
  const currentUser = useSelector(state => state.users.currentUser);
  const dispatch = useDispatch();
  const [profilePicture, setProfilePicture] = useState(currentUser.profilePicture);
  const [nameString, setNameString] = useState(currentUser.firstName + " " + currentUser.lastName);
  const [bioString, setBioString] = useState(currentUser.bio);
  const [emailString, setEmailString] = useState(currentUser.email);
  const [phoneString, setPhoneString] = useState(currentUser.phone);
  const [locationString, setLocationString] = useState(currentUser.location);

  const profileBirthdayYear = currentUser.dateOfBirth.substring(0, 4);
  const profileBirthdayMonth = currentUser.dateOfBirth.substring(5, 7);
  const profileBirthdayDate = currentUser.dateOfBirth.substring(8, 10);
  const [birthdateString, setBirthdateString] = useState(profileBirthdayYear + "-" + profileBirthdayMonth + "-" + profileBirthdayDate);
  const [dateInEdit, setDateInEdit] = useState(false);

  const handleChangeProfilePicture = (file) => {
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "yealp123")
    axios.post("https://api.cloudinary.com/v1_1/drqcpoarf/image/upload", formData).then((res) => {
      setProfilePicture(res.data.url)
    })
  };

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

  const changeLocation = (event) => {
    setLocationString(event.target.value);
  };

  const changeBirthdate = (event) => {
    setBirthdateString(event.target.value);
  };


  const saveHandler = () => {
    const newProfile = {
      profilePicture: profilePicture,
      firstName: nameString.split(" ")[0],
      lastName: nameString.split(" ")[1],
      username: currentUser.username,
      email: emailString,
      phone: phoneString,
      bio: bioString,
      location: locationString,
      dateOfBirth: birthdateString
    }
    dispatch(updateCurrentUserProfileByUserNameThunk(newProfile));
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
        <img src={currentUser.bannerPicture} height={230} alt={currentUser.bannerPicture} className="w-100 rounded-1 mt-1 wd-object-fit-cover-image"/>
        <div>
          <img src={profilePicture} height={150} width={150} alt={profilePicture} className="rounded-2 ms-3 wd-profile-image"/>
          <input className="ms-3" type="file" accept="image/*"
                 onChange={(e)=>{handleChangeProfilePicture(e.target.files[0])}}/>
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