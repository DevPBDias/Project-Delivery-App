import React from 'react';
import { Container } from 'react-bootstrap';
import FormRegister from '../components/FormRegister';

function Register() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center
      container-fluid vh-100"
    >
      <FormRegister />
    </Container>
  );
}

export default Register;
