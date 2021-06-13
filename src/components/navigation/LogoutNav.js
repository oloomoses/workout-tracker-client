import React from 'react';
import {
  Navbar, Nav, Button,
} from 'react-bootstrap';

const LogoutNav = () => {
  const logout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Navbar className="d-flex flex-column">
      <Nav className="ml-auto">
        <Button className="logout-btn" onClick={logout}>Log Out</Button>
      </Nav>

      <Nav className="mx-auto">
        <div className="brand">Track.It</div>
      </Nav>
    </Navbar>
  );
};

export default LogoutNav;
