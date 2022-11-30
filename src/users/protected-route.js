import {Navigate} from "react-router";
import {useSelector} from "react-redux";
import React from "react";

const ProtectedRoute = ({children}) => {
  const {currentUser} = useSelector((state) => state.users)
  if (currentUser) {
    return (children)
  } else {
    return (<Navigate to={'/login'}/>)
  }
}

export default ProtectedRoute