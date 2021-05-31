import React from 'react';
// import { Link } from 'react-router-dom';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';

const LogoutNav = () => {
  const logout = (token) => token;

  return (
    <Navbar className="d-flex flex-column">
      <Nav className="ml-auto">
        <li className="nav-item">
          <Button className="nav-link" onClick={logout}>Log Out</Button>
        </li>
      </Nav>

      <Nav className="mx-auto">
        <li className="nav-item">
          <div className="brand">Track.It</div>
        </li>
      </Nav>
    </Navbar>
  );
};

export default LogoutNav;
