import React from 'react';
import { Link } from 'react-router-dom';

function ProductsBtn() {
  const linkProduct = (
    <Link data-testid="??????" to="/customer/products">
      PRODUTOS
    </Link>);
  return (linkProduct);
}

export default ProductsBtn;
