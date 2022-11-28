import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunks";
import "./index.css";
import {Link} from "react-router-dom";
import AvatarUploader from "react-avatar-uploader";
import {Navigate} from "react-router";

const Register = () => {
  const [role, setRole] = useState('')
  const [profilePicture, setProfilePicture] = useState('https://user-images.githubusercontent.com/15254181/203483222-a01e1942-19e4-49c8-b3e3-41dd0ce8b3de.jpg')
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [validatePassword, setValidatePassword] = useState('')
  const [location, setLocation] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [error, setError] = useState(null)
  const {currentUser} = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const handleRegisterBtn = (e) => {
    e.preventDefault();
    if (role === "") {
      setError('Select your role')
      return
    }
    if (username === "") {
      setError('Username must be filled')
      return
    }
    if (firstName === "") {
      setError('First Name must be filled')
      return
    }
    if (lastName === "") {
      setError('Last Name must be filled')
      return
    }
    if (email === "") {
      setError('Email must be filled')
      return
    }
    if (phone === "") {
      setError('Phone Number must be filled')
      return
    }
    if (password === "") {
      setError('Password must be filled')
      return
    }
    if (validatePassword === "") {
      setError('Confirm your password')
      return
    }
    if (password !== validatePassword) {
      setError('Passwords must match')
      return
    }
    if (location === "") {
      setError('Location must be filled')
      return
    }
    if (dateOfBirth === "") {
      setError('Date of Birth must be filled')
      return
    }
    setError(null)
    const newUser = {role, profilePicture, username, firstName, lastName, email, phone, password, location, dateOfBirth}
    dispatch(registerThunk(newUser))
  }
  if (currentUser) {
    return (<Navigate to={'/profile'}/>)
  }
  return(
      <div className="d-flex justify-content-center">
        <form className="wd-auth-form">
          <div className="wd-auth-form-content">
            <h3 className="wd-auth-form-title">Sign Up</h3>
            {
              error &&
              <div className="alert alert-danger mt-2 mb-2">
                {error}
              </div>
            }
            <div className="form-group">
              <h6 className="mt-4 fw-bold">Select your role</h6>
              <div className="form-check" >
                <input className="form-check-input" type="radio"
                       name="roleOptions" id="registerOptionCustomer" value="CUSTOMER"
                       onChange={(e)=>{setRole(e.target.value)}}/>
                <label className="form-check-label" htmlFor="registerOptionCustomer">
                  Customer
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"
                       name="roleOptions" id="registerOptionRestaurantOwner" value="OWNER"
                       onChange={(e)=>{setRole(e.target.value)}}/>
                <label className="form-check-label" htmlFor="registerOptionRestaurantOwner">
                  Restaurant Owner
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio"
                       name="roleOptions" id="registerOptionAdmin" value="ADMIN"
                       onChange={(e)=>{setRole(e.target.value)}}/>
                <label className="form-check-label" htmlFor="registerOptionAdmin">
                  Admin
                </label>
              </div>
            </div>
            <div className="mt-4 mb-2 fw-bold">Upload a profile image</div>
            <div className="d-flex justify-content-center">
              <AvatarUploader
                  name="uploadProfilePicture"
                  size={120}
                  uploadURL="http://localhost:3000"
                  fileType={"image/jpeg"}
                  value={profilePicture}
                  onChange={(e) => {
                    setProfilePicture(URL.createObjectURL(e.target.files[0]))
                  }}/>
            </div>
            <div id="customerForm">
              <div className="form-group">
                <label htmlFor="registerUserName"
                       className="form-label mt-4 fw-bold">Username</label>
                <input type="text" className="form-control"
                       id="registerUserName" placeholder="Username" value={username}
                       onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="registerFirstName"
                       className="form-label mt-2 fw-bold me-2">First Name</label>
                <input type="text" className="form-control"
                       id="registerFirstName" placeholder="First Name" value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="registerLastName"
                       className="form-label mt-2 fw-bold me-2">Last Name</label>
                <input type="text" className="form-control"
                       id="registerLastName" placeholder="Last Name" value={lastName}
                       onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="registerEmail"
                       className="form-label mt-2 fw-bold">Email</label>
                <input type="email" className="form-control"
                       id="registerEmail" placeholder="example@gmail.com" value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="registerPhone"
                       className="form-label mt-2 fw-bold me-2">Phone Number</label>
                <input type="text" className="form-control"
                       id="registerPhone" placeholder="Phone Number" value={phone}
                       onChange={(e) => setPhone(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="registerPassword"
                       className="form-label mt-2 fw-bold">Password</label>
                <input type="password" className="form-control"
                       name="registerPassword"
                       id="registerPassword" placeholder="Password" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="registerValidatePassword"
                       className="form-label mt-2 fw-bold">Password Confirm</label>
                <input type="password" className="form-control"
                       name="registerValidatePassword"
                       id="registerValidatePassword" placeholder="Enter password again" value={validatePassword}
                       onChange={(e) => setValidatePassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="registerLocation"
                       className="form-label mt-2 fw-bold me-2">Location</label>
                <input type="text" className="form-control"
                       id="registerLocation" placeholder="Location" value={location}
                       onChange={(e) => setLocation(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="registerDateOfBirth"
                       className="form-label mt-2 fw-bold me-2">Date of Birth</label>
                <input type="date" className="form-control"
                       id="registerDateOfBirth" placeholder="mm/dd/yyyy" value={dateOfBirth}
                       onChange={(e) => setDateOfBirth(e.target.value)}/>
              </div>
              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-primary fw-bold"
                        onClick={handleRegisterBtn}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="wd-sign-up-box">
            <span className="mt-4 fw-bold me-2">Already have an account?</span>
            <Link to="/login" className="mt-4 fw-bold text-info">Log In</Link>
          </div>
        </form>
      </div>
  );
};

export default Register;