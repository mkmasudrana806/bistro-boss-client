import React from "react";
import { useContext } from "react";
import { Container, Form } from "react-bootstrap";
import { AuthContext } from "../../auth/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.state || "/";
  console.log("previous pathename was", pathname);
  const { logInUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // here login user
  const onSubmit = (data) => {
    logInUser(data.email, data.password)
      .then((user) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(pathname, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter email"
          />
          {errors.email && <p>Email is must required to input</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              // pattern: /(?=.*[A-Z]) (?=.*[!*@$&]) (?=.*[a-z]) (?=.*[0-9])/,
            })}
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <span className="text-danger">
              {" "}
              Password Must be at least 6 character!
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-danger">
              {" "}
              Password Must be between 6-20 character!
            </span>
          )}
        </Form.Group>
        <button>Submit</button>
        <p>
          Don't have any account? <Link to="/register">Register</Link>
        </p>
        <hr />
        <SocialLogin></SocialLogin>
      </form>
    </Container>
  );
};

export default Login;
