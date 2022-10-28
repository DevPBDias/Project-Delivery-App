import React, { Component } from 'react';

export default class LoginBtn extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          name="login-button"
          data-testid="common_login__button-login"
        >
          Login
        </button>
      </div>
    );
  }
}
