import React from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = useLocation().pathname || "/";
  //   console.log("current location is: ", from);
  // navigate is a function.it will take two parameter. navigate(to, options).
  //   console.log("navigate object is: ", navigate);
  //   console.log("type of navigate: ", typeof navigate);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (user) {
    return children;
  } else {
    return navigate("/login", { state: from });
  }
};

// here to means where we want to go.
// second is query parameter or state we can pass. we can pass an object there. this props will be accessed by the target route. using useLocation().state;

export default PrivateRoute;
