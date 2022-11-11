import React from 'react';
import { useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function LogOutBtn() {
  const history = useHistory();

  const clearLocalStorage = async () => {
    localStorage.clear();
    history.push('/login');
  };

  const linkProduct = (
    <Nav.Link
      type="button"
      data-testid="customer_products__element-navbar-link-logout"
      onClick={ clearLocalStorage }
    >
      Sair
    </Nav.Link>
  );
  return (linkProduct);
}
export default LogOutBtn;
