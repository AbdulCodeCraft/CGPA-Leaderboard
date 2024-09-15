// src/Components/Register/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user info to Firestore
      await setDoc(doc(firestore, "users", user.uid), {
        name: name,
        email: email,
        role: 'student' // Default role
      });

      setMessage("Account created successfully! You can now log in.");
      // Redirect to login after a short delay
      setTimeout(() => navigate('/login'), 3000);
    } catch (error) {
      setError("Error creating account: " + error.message);
    }
  };

  return (
    <Container className="mt-5 login-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center text-light">Register</h2>
          <p className="text-center text-light">
            Join us today! Create an account to access your dashboard and track your academic performance.
          </p>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleRegister}>
            <Form.Group controlId="formBasicName">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-dark text-light"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mt-3">
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
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
