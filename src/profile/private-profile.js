import React from "react";

const PrivateProfile = ({profile}) => {
  // const {currentUser} = useSelector(state => state.users); // todo: uncomment
  const currentUser = {...profile, _id: "a"}; // todo: delete
  const isLoggedIn = (currentUser != null && currentUser._id === profile._id);

  return (
      <>
        {!isLoggedIn &&
            <h4 className="text-info">This content is only viewable by the account owner. Please log in to see details of your profile.</h4>
        }
        {isLoggedIn && <div className="ms-3">
          <h3 className="text-info">Private Information</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">First Name:<span className="text-dark ps-2">{profile.firstName}</span></div></li>
            <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Last Name:<span className="text-dark ps-2">{profile.lastName}</span></div></li>
            <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Birthday:<span className="text-dark ps-2">{profile.dateOfBirth.substring(0, 10)}</span></div></li>
            <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Email:<span className="text-dark ps-2">{profile.email}</span></div></li>
            <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Phone:<span className="text-dark ps-2">{profile.phone}</span></div></li>
          </ul>
        </div>}

      </>
  );
};

export default PrivateProfile;