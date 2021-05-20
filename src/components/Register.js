/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const Register = ({ submission }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirm_password] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      confirm_password,

    };
    submission(userData);
  };

  return (
    <div>
      <h3 className="text-center my-3">Register</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" name="username" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirm_password(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

Register.propTypes = {
  submission: PropTypes.func.isRequired,
};

export default Register;
