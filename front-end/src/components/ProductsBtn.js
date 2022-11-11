import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

function ProductsBtn({ role }) {
  const history = useHistory();

  const products = () => {
    console.log(role);
    if (role === 'customer') {
      history.push('/customer/products');
    } else if (role === 'seller') {
      history.push('/seller/orders/');
    } else {
      console.log('fazer a rota');
    }
  };

  const linkProduct = (
    <Nav.Link
      type="button"
      onClick={ () => products() }
      data-testid="customer_products__element-navbar-link-products"
    >
      PRODUTOS
    </Nav.Link>
  );
  return (linkProduct);
}

ProductsBtn.propTypes = {
  role: PropTypes.string,
}.isRequired;

export default ProductsBtn;
