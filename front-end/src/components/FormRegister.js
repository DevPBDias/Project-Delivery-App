import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { setToken, requestRegister } from '../services/requests';

function FormRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const { token, role } = await requestRegister(
        '/register',
        { name, email, password },
      );
      setToken(token);

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      history.push('/customer/products');
    } catch (error) {
      setFailedTryLogin(true);
      setErrorMsg('Não foi possível efetuar o cadastro');
    }
  };

  const handleBtn = () => {
    const twelve = 12;
    const nameValid = name.length >= twelve;

    const regexEmail = /^\S+@\S+\.\S+$/;
    const emailValid = regexEmail.test(email);

    const five = 5;
    const pwdValid = password.length > five;

    return emailValid && pwdValid && nameValid;
  };

  return (
    <Form
      className="d-flex align-items-center justify-content-center flex-column
      rounded p-4 p-sm-3 bg-secondary shadow"
    >
      <h2>Cadastro</h2>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Control
          type="text"
          name="name"
          id="name"
          onChange={ ({ target: { value } }) => setName(value) }
          placeholder="Seu nome"
          data-testid="common_register__input-name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          id="email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="seu-email@site.com.br"
          data-testid="common_register__input-email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="password">Senha</Form.Label>
        <Form.Control
          type="password"
          name="password"
          id="password"
          onChange={ ({ target: { value } }) => setPassword(value) }
          placeholder="******"
          data-testid="common_register__input-password"
        />
      </Form.Group>
      <Button
        type="button"
        data-testid="common_register__button-register"
        disabled={ !handleBtn() }
        onClick={ (event) => handleClick(event) }
      >
        Cadastro
      </Button>
      {
        failedTryLogin ? (
          <p data-testid="common_register__element-invalid_register">{ errorMsg }</p>
        ) : ''
      }
    </Form>
  );
}

export default FormRegister;
