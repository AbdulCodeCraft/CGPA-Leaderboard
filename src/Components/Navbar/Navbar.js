import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

const DashboardNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">CSE Leaderboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Leaderboard" id="basic-nav-dropdown">
            <LinkContainer to="/leaderboard/1st-year">
              <NavDropdown.Item>1st Year</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/leaderboard/2nd-year">
              <NavDropdown.Item>2nd Year</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/leaderboard/3rd-year">
              <NavDropdown.Item>3rd Year</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/leaderboard/4th-year">
              <NavDropdown.Item>4th Year</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logout">
            <Nav.Link>Logout</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashboardNavbar;
