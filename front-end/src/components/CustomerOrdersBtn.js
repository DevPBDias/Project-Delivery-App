import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function OrdersBtn({ role }) {
  const history = useHistory();

  const myOrders = () => {
    if (role === 'customer') {
      history.push('/customer/orders');
    } else if (role === 'seller') {
      history.push('/seller/orders');
    }
  };

  const linkProduct = (
    <button
      type="button"
      onClick={ () => myOrders() }
      data-testid="customer_products__element-navbar-link-orders"
    >
      MEUS PEDIDOS
    </button>);
  return (linkProduct);
}

OrdersBtn.propTypes = {
  role: PropTypes.string,
}.isRequired;

export default OrdersBtn;
