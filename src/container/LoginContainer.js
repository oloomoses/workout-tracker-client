import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { userLogin } from '../redux/actions';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    dispatch(userLogin(loginData));
  };

  return (
    <Container fluid>
      <h3 className="text-center my-3">Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="text-center">
          <Button variant="primary" type="submit" className="">
            Login
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LoginContainer;
