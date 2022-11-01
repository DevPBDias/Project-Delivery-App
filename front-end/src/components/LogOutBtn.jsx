import React from 'react';
import { Link } from 'react-router-dom';

function LogOutBtn() {
  const linkProduct = (
    <Link
      data-testid="customer_products__element-navbar-link-logout"
      to="/login"
    >
      Sair
    </Link>);
  return (linkProduct);
}

export default LogOutBtn;
