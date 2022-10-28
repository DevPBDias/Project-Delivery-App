import React from 'react';
import { Link } from 'react-router-dom';

function CheckOutBtn() {
  const linkProduct = (
    <Link data-testid="??????" to="customer/orders/<id>">
      FINALIZAR PEDIDO
    </Link>);
  return (linkProduct);
}

export default CheckOutBtn;
