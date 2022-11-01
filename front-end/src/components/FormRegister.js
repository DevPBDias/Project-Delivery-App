import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setToken, requestRegister } from '../services/requests';
//
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
    <form>
      <h2>Cadastro</h2>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          name="name"
          id="name"
          onChange={ ({ target: { value } }) => setName(value) }
          placeholder="Seu nome"
          data-testid="common_register__input-name"
        />
      </label>

      <br />
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          id="email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="seu-email@site.com.br"
          data-testid="common_register__input-email"
        />
      </label>

      <br />
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          id="password"
          onChange={ ({ target: { value } }) => setPassword(value) }
          placeholder="******"
          data-testid="common_register__input-password"
        />
      </label>

      <br />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ !handleBtn() }
        onClick={ (event) => handleClick(event) }
      >
        Cadastro
      </button>
      {
        failedTryLogin ? (
          <p data-testid="common_register__element-invalid_register">{ errorMsg }</p>
        ) : ''
      }
    </form>
  );
}

export default FormRegister;
