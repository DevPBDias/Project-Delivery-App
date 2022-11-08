import React from 'react';
import { Link } from 'react-router-dom';

function LogOutBtn() {
  const clearLocalStorage = () => {
    localStorage.setItem('user', '');
  };
  const linkProduct = (
    <button type="button" onClick={ clearLocalStorage }>
      <Link
        data-testid="customer_products__element-navbar-link-logout"
        to="/login"
      >

        Sair

      </Link>
    </button>
  );
  return (linkProduct);
}
export default LogOutBtn;
