import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../auth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.state || "/";
  const hanldeGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate(pathname, { replace: true });
        console.log("logged user is", loggedUser);
        // insert user info
        const newUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then(() => { 
            
          });
      })
      .catch((error) => console.log("error while google login "));
  };
  return (
    <div>
      <p onClick={hanldeGoogleLogin}>
        <FaGoogle></FaGoogle>
      </p>
    </div>
  );
};

export default SocialLogin;
