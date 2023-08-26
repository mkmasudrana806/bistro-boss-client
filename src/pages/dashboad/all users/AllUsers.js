import React from "react";
import useAllUsers from "../../../hooks/useAllUsers";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import "./AllUser.css";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, refetch] = useAllUsers();
  // handle delete user
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure want to this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };
  // hanldle make admin
  const hanldeMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log("make admin done");
          refetch();
          Swal.fire("Deleted!", "Make admin done.", "success");
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Bristo Boss | All Users</title>
      </Helmet>
      <SectionTitle
        heading={"Manage Users"}
        subHeading={"Happy manage"}
      ></SectionTitle>
      <div>
        <h4>Total Users: {users.length} </h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SN.</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <>
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="make-admin">
                    {user?.role === "admin" ? "admin": (
                      <button
                        onClick={() => hanldeMakeAdmin(user)}
                        style={{
                          padding: "5px 9px",
                          borderRadius: "50px",
                          color: "white",
                        }}
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    )}
                  </td>
                  <td className="user-action">
                    <button
                      onClick={() => handleDeleteUser(user)}
                      style={{
                        padding: "5px 9px",
                        borderRadius: "50px",
                        color: "white",
                      }}
                    >
                      <MdDelete></MdDelete>
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AllUsers;
