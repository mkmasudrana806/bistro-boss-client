import React, { useContext } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthProvider";
import { MdDashboard } from "react-icons/md";
import useCart from "../../../hooks/useCart";

const Navitem = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut();
  };

  console.log(user);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container className="text-white">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="menu">Our Menu</Link>
              <Link className="ms-3" to="order">
                Order Food
              </Link>
              <Link className="ms-3" to="/dashboard">
                My Cart{" "}
                <span
                  style={{
                    borderRadius: "50px",
                    padding: "1px 7px",
                    backgroundColor: "#ae01ff",
                    color: "white",
                  }}
                >
                  {cart?.length || 0}
                </span>
                {/* {user?.email && (
                  <span>
                    <MdDashboard></MdDashboard> Dashboard
                  </span>
                )} */}
              </Link>
              <Link className="ms-3" to="/secret">
                secret
              </Link>
              {!loading && user?.uid ? (
                <button onClick={handleLogOut}>Log OUt</button>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navitem;
