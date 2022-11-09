import React from 'react';
import { useHistory } from 'react-router-dom';

function LogOutBtn() {
  const history = useHistory();

  const clearLocalStorage = async () => {
    const verify = history.location.pathname === '/customer/orders/:id';
    if (!verify) {
      localStorage.setItem('user', '');
    }
    history.push('/login');
  };
  const linkProduct = (
    <button
      type="button"
      data-testid="customer_products__element-navbar-link-logout"
      onClick={ clearLocalStorage }
    >
      Sair
    </button>
  );
  return (linkProduct);
}
export default LogOutBtn;
