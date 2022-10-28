import React, { Component } from 'react';

export default class RegisterBtn extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          name="register-button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </div>
    );
  }
}
