import React from 'react';

function LoginBtn() {
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

export default LoginBtn;
