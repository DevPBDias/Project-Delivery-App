import React from 'react';
import PropTypes from 'prop-types';

function ClientCheckoutProducts({
  productsArray,
  formatPrice,
}) {
  const verifyQty = productsArray.filter((elP) => elP.qty > 0);

  return (
    <table className="score-board-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          verifyQty.map((
            {
              name,
              qty,
              price,
            },
            index,
          ) => (
            <tr key="tableTr">
              <td
                className="id"
                data-testid={ 'customer_checkout__element-order-table-item-number-'
                 + `${index}` }
              >
                {index + 1}
              </td>
              <td
                className="name"
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {name}
              </td>
              <td
                className="quantity"
                data-testid={ 'customer_checkout__element-order-table-quantity-'
                + `${index}` }
              >
                {qty}
              </td>
              <td
                className="unitValue"
                data-testid={ 'customer_checkout__element-order-table-unit-price-'
                + `${index}` }
              >
                {formatPrice(price)}
              </td>
              <td
                className="subTotal"
                data-testid={ 'customer_checkout__element-order-table-sub-total-'
                + `${index}` }
              >
                {formatPrice(price * qty)}
              </td>
              <td
                className="removeButton"
                data-testid={ 'customer_checkout__element-order-table-remove-'
                + `${index}` }
              >
                <button type="button">Remover</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

ClientCheckoutProducts.propTypes = {
  productsArray: PropTypes.elementType.isRequired,
  formatPrice: PropTypes.func.isRequired,
};

export default ClientCheckoutProducts;
