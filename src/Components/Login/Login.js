import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirect to dashboard or leaderboard
      navigate('/dashboard'); // or '/leaderboard' based on user role
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container className="mt-5 login-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center text-light">Login</h2>
          <p className="text-center text-light">
            Welcome back! Please log in to access your dashboard and stay updated with your academic performance.
          </p>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-dark text-light"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label className="text-light">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-dark text-light"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3" block>
              Login
            </Button>
          </Form>
          <Button variant="link" onClick={() => navigate('/forgot-password')} className="mt-3 text-light">
            Forgot Password?
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
