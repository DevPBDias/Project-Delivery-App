import React from 'react';
import { Link } from 'react-router-dom';

function ProductsBtn() {
  const linkProduct = (
    <Link
      data-testid="customer_products__element-navbar-link-products"
      to="/customer/products"
    >
      PRODUTOS
    </Link>);
  return (linkProduct);
}

export default ProductsBtn;
