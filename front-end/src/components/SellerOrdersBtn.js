import React from 'react';
import { Link } from 'react-router-dom';

function SellerOrdersBtn() {
  const linkProduct = (
    <Link
      data-testid="customer_products__element-navbar-link-orders"
      to="/seller/orders"
    >
      MEUS PERDIDOSSS
    </Link>);
  return (linkProduct);
}
export default SellerOrdersBtn;
