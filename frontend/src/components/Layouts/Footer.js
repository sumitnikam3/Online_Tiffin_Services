import "../../styles/HeaderStyle.css";
import "../../styles/HomeStyle.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center mb-4">
            <h5>Follow Us On</h5>
            <ul className="list-inline text-center mb-0">
              <li className="list-inline-item">
                <Link to="/">
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <i className="bi bi-twitter"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <i className="bi bi-instagram"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <i className="bi bi-youtube"></i>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center">
            <ul className="list-unstyled mb-0">
              <li>
                
                <h6 to="/">
                  © 2024 <span>DABBAWALA</span>
                </h6>
              </li>
              <li>
                <Link className="text-primary" to="aboutus">About Us</Link>
              </li>
              <li>
                <Link className="text-primary" to="/">Terms Of Use</Link>
              </li>
              <li>
                <Link className="text-primary" to="/">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
