import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { Table } from "react-bootstrap";
import "./MyCart.css";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  // handle delete item
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bristo Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        heading={"My Cart"}
        subHeading={"ADDING MORE?"}
      ></SectionTitle>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Total Ordered: {cart.length} </h4>
          <h4>Total Price: ${total}</h4>
          <h4 className="btn btn-primary">Pay</h4>
        </div>
        {console.log(cart)}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SN.</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <>
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "50px",
                      }}
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td className="item-action">
                    <button
                      style={{
                        padding: "5px 9px",
                        borderRadius: "50px",
                        color: "white",
                      }}
                    >
                      <BsEyeFill></BsEyeFill>
                    </button>
                    <button
                      onClick={() => handleDeleteItem(item)}
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

export default MyCart;
