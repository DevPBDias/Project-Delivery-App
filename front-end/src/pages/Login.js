import React from 'react';
import { Container } from 'react-bootstrap';
import LogoGroup from '../components/LogoGroup';
import FormsLogin from '../components/FormsLogin';

function Login() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center
      container-fluid vh-100"
    >
      <div
        className="d-flex align-items-center justify-content-center flex-column
        rounded p-4 p-sm-3 bg-secondary shadow"
      >
        <LogoGroup />
        <FormsLogin />
      </div>
    </Container>
  );
}

export default Login;
