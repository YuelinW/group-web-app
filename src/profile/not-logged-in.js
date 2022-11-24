import React from "react";

const NotLoggedIn = () => {
  return (
      <>
        <p className="text-primary text-lg-start fw-bold mt-4">Sorry! You are not logged in. Please login to view your profile. (Make sure to give navbar to login.)</p>
        <img src="https://user-images.githubusercontent.com/15254181/203661926-2c855063-9329-477b-957e-babf4f79db2a.png" alt="sorry" className="rounded-2"/>
      </>
  );
};
export default NotLoggedIn;