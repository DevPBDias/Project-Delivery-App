import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterBtn from './RegisterBtn';
import { requestLogin, setToken } from '../services/requests';

function FormsLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const history = useHistory();

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const { token, role } = await requestLogin('/login', { email, password });
      setToken(token);
      setUserRole(role);

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) {
    history.push(`${userRole}`);
  }

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
            <p data-testid="common_login__element-invalid-email">Mensagens de erro</p>
          ) : ''
        }
        <button
          type="button"
          name="login-button"
          data-testid="common_login__button-login"
          onClick={ (event) => handleClick(event) }
        >
          Login
        </button>
        <RegisterBtn />
      </form>
    </div>
  );
}

export default FormsLogin;
