import React from 'react';
import { Link } from 'react-router-dom';

function RegisterBtn() {
  return (
    <div>
      <Link to="/register">
        <button
          type="button"
          name="register-button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </div>
  );
}

export default RegisterBtn;
