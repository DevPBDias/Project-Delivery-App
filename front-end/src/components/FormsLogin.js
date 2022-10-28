import React, { Component } from 'react';
import RegisterBtn from './RegisterBtn';
import LoginBtn from './LoginBtn';
import MsgErrorLogin from './MsgErrorLogin';

export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Login
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              data-testid="common_login__input-email"
            />
          </label>
          <label htmlFor="senha">
            Senha
            <input
              type="text"
              id="senha"
              name="senha"
              placeholder="Senha"
              data-testid="common_login__input-password"
            />
          </label>
          <LoginBtn />
          <RegisterBtn />
          <MsgErrorLogin />
        </form>
      </div>
    );
  }
}
