import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Row>
        <Col md={6} className="bg-secondary text-center">
          <div style={{ marginLeft: "120px", padding: "100px" }}>
            <h4>CONTACT US</h4>
            <address>
              123 ABS Street, Uni 21, Bangladesh +88 123456789 Mon - Fri: 08:00
              - 22:00 Sat - Sun: 10:00 - 23:00
            </address>
          </div>
        </Col>
        <Col md={6} className="bg-primary text-center">
          <div style={{ marginRight: "120px", padding: "100px" }}>
            <h4>Follow US</h4>
            <p>Join us on social media</p>
            <address>
              123 ABS Street, Uni 21, Bangladesh
            </address>
          </div>
        </Col>
      </Row>
      <p className="text-center py-3">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
