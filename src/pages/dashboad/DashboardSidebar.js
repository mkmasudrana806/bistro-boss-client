import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import "./DashboardSidebar.css";
import { NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaShoppingBag,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { MdPayment, MdContactMail } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiMenu } from "react-icons/fi";
import useCart from "../../hooks/useCart";

const DashboardSidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic is admin page on data
  const isAdmin = false;

  return (
    <>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <div
          style={{
            backgroundColor: "orange",
            height: "100vh",
            padding: "15px",
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body id="hi" className="custom-offcanvas-body ">
            {isAdmin ? (
              <>
                <>
                  {" "}
                  <h3>Dashboard</h3>
                  <ul>
                    <li>
                      <NavLink to="/">
                        <AiFillHome></AiFillHome> ADMIN HOME
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/menu">
                        <FaUtensils></FaUtensils> ADD ITEMS
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/order">
                        <TfiMenuAlt></TfiMenuAlt> MANAGE ITEMS
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/order">
                        <FaBook></FaBook> MANAGE BOOKINGS
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/dashboard/alluser">
                        <FaUsers></FaUsers> ALL USERS
                      </NavLink>{" "}
                    </li>
                  </ul>
                </>
              </>
            ) : (
              <>
                <ul>
                  <li>
                    <NavLink to="/">
                      <AiFillHome></AiFillHome> HOME
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/menu">
                      <FiMenu></FiMenu> Menu
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/order">
                      <FaShoppingBag></FaShoppingBag> Shop
                    </NavLink>{" "}
                  </li>
                </ul>{" "}
                <ul>
                  <li>
                    <NavLink to="/user-home">
                      <AiFillHome></AiFillHome> USER HOME
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/reservation">
                      <SlCalender></SlCalender> RESERVATION
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/payment-history">
                      <MdPayment></MdPayment> PAYMENT HISTORY
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/dashboard/mycart">
                      <FaShoppingCart></FaShoppingCart> My Cart{" "}
                      <span
                        style={{
                          borderRadius: "50px",
                          padding: "2px 9px",
                          backgroundColor: "purple",
                        }}
                      >
                        {cart?.length || 0}
                      </span>
                    </NavLink>{" "}
                  </li>
                  <li>
                    <NavLink to="/add-review">
                      <VscPreview></VscPreview> ADD REVIEW
                    </NavLink>{" "}
                  </li>
                </ul>
              </>
            )}
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </>
  );
};

export default DashboardSidebar;
