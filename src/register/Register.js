import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { AuthContext } from "../auth/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((user) => {
        updateUserProfile(data.name, data.photourl)
          .then(() => {
            // insert user info
            const newUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Profile updated",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          })
          .catch((error) => {
            console.log("error when update user profile");
          });
          logOut();
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  return (
    <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-center">Please Register</h3>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          {...register("name")}
          placeholder="Enter email"
        />
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control
          type="text"
          {...register("photourl")}
          placeholder="PhotoURL"
        />
      </Form.Group>
      <button>Register</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
