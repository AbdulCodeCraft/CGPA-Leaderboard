// src/Components/ForgotPassword/ForgotPassword.js
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Check your inbox.");
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setError("Invalid email address");
      } else if (error.code === 'auth/user-not-found') {
        setError("No user found with this email address");
      } else {
        setError("Failed to send password reset email");
      }
    }
  };

  return (
    <Container className="mt-5 login-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center text-light">Forgot Password</h2>
          <p className="text-center text-light">
            Enter your email address below to receive a password reset link.
          </p>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleForgotPassword}>
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
            <Button variant="primary" type="submit" className="mt-3" block>
              Send Reset Link
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
