import React from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function AppNavbar() {

      const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear auth token
    navigate("/login"); // Redirect to login page
  };


  return (
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            height="25"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Dashboard</Nav.Link>
            <Nav.Link href="#">Team</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#">
              <FaShoppingCart />
            </Nav.Link>

            <NavDropdown
              title={
                <>
                  <FaBell />{" "}
                  <Badge pill bg="danger">
                    1
                  </Badge>
                </>
              }
              id="notifications-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#">Some news</NavDropdown.Item>
              <NavDropdown.Item href="#">Another news</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title={
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="30"
                  alt="User avatar"
                />
              }
              id="user-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#">My profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Settings</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
