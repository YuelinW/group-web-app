import React from "react";

const PrivateProfile = ({profile}) => {
  return (
      <div className="ms-3">
        <h3 className="text-info">Private Information</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">First Name:<span className="text-dark ps-2">{profile.firstName}</span></div></li>
          <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Last Name:<span className="text-dark ps-2">{profile.lastName}</span></div></li>
          <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Birthday:<span className="text-dark ps-2">{profile.dateOfBirth.substring(0, 10)}</span></div></li>
          <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Email:<span className="text-dark ps-2">{profile.email}</span></div></li>
          <li className="list-group-item w-75"><div className="fw-bold mb-0 text-secondary">Phone:<span className="text-dark ps-2">{profile.phone}</span></div></li>
        </ul>
      </div>
  );
};

export default PrivateProfile;