import React from 'react';
import { Link } from 'react-router-dom';

function OrdersBtn() {
  const linkProduct = (
    <Link
      data-testid="customer_products__element-navbar-link-orders"
      to="/customer/orders"
    >
      MEUS PEDIDOS
    </Link>);
  return (linkProduct);
}
export default OrdersBtn;
