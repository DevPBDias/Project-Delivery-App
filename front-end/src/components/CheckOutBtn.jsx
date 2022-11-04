import React from 'react';
import { useHistory } from 'react-router-dom';

function CheckOutBtn() {
  const history = useHistory();
  const linkProduct = (
    <button
      type="button"
      data-testid="customer_checkout__button-submit-order"
      onClick={ () => history.push('/customer/orders/:id') }
    >
      <p>
        FINALIZAR PEDIDO
      </p>
    </button>);
  return (linkProduct);
}

export default CheckOutBtn;
