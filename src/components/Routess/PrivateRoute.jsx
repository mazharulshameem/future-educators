import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/signin" />;
};

export default PrivateRoute;
