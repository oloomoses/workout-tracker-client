import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Navbar, Nav,
} from 'react-bootstrap';

const Navigation = () => {
  const token = useSelector((state) => state.token);
  return (
    <div>
      <Navbar className="bg-custom justify-content-between">
        <Navbar.Brand href="/">Track.It</Navbar.Brand>

        { token ? null : (

          <Nav className="">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Register</Link>
            </li>

          </Nav>
        )}
      </Navbar>
    </div>
  );
};

export default Navigation;
