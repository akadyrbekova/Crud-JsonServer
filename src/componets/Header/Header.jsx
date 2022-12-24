import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Link className="text-decoration-none" to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link className="text-decoration-none" to="/add">
            <Navbar.Brand>add product</Navbar.Brand>
          </Link>
          <Link className="text-decoration-none" to="/contacts">
            <Navbar.Brand>contacts</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
