import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterBtn from './RegisterBtn';
import { requestLogin, setToken } from '../services/requests';

export default function FormsLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const { token, role } = await requestLogin('/login', { email, password });
      setToken(token);

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      history.push('/customer/products');
    } catch (error) {
      setFailedTryLogin(true);
      setErrorMsg('Não foi possível efetuar login, tente novamente');
    }
  };

  const handleBtn = () => {
    const regexEmail = /^\S+@\S+\.\S+$/;
    const emailValid = regexEmail.test(email);

    const five = 5;
    const pwdValid = password.length > five;

    return emailValid && pwdValid;
  };

  return (
    <div>
      <form>
        <label htmlFor="email">
          Login
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            id="email"
            placeholder="Email"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            type="text"
            name="senha"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            id="senha"
            placeholder="Senha"
            data-testid="common_login__input-password"
          />
        </label>
        {
          failedTryLogin ? (
            <p data-testid="common_login__element-invalid-email">{ errorMsg }</p>
          ) : ''
        }
        <button
          type="button"
          name="login-button"
          data-testid="common_login__button-login"
          onClick={ (event) => handleClick(event) }
          disabled={ !handleBtn() }
        >
          Login
        </button>
        <RegisterBtn />
      </form>
    </div>
  );
}
