/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { userRegister } from '../redux/actions';

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setConfirm_password] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      password_confirmation,

    };
    dispatch(userRegister(userData));
  };

  return (
    <Container fluid>
      <h3 className="text-center my-3">Register</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" name="username" required onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" required onChange={(e) => setConfirm_password(e.target.value)} />
        </Form.Group>

        <Form.Group className="text-center">
          <Button variant="primary" type="submit" className="">
            Register
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default RegisterContainer;
