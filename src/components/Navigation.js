import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const Navigation = () => (
  <div>
    <Navbar className="bg-custom justify-content-between">
      <Navbar.Brand href="/">Track.It</Navbar.Brand>

      <Nav className="">
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Register</Link>
        </li>

      </Nav>
    </Navbar>
  </div>
);

export default Navigation;
