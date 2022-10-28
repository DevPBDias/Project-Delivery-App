import React from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

function ClientCheckoutProducts({
  productsArray,
}) {
  return (
    <table className="score-board-table">
      <thead>
        <tr>
          <th data-testid="dontKnowYet">Item</th>
          <th data-testid="dontKnowYet">Descrição</th>
          <th data-testid="dontKnowYet">Quantidade</th>
          <th data-testid="dontKnowYet">Valor Unitário</th>
        </tr>
      </thead>
      <tbody>
        {
          productsArray.map((
            {
              id,
              name,
              qtd,
              price,
            },
            index,
          ) => (
            <tr key="batata">
              <td
                className="dontKnowYet"
                data-testid={ `dontKnowToo${index + 1}` }
              >
                {id}
              </td>
              <td
                className="dontKnowYet"
                data-testid={ `dontKnowToo${index + 1}` }
              >
                {name}
              </td>
              <td
                className="dontKnowYet"
                data-testid={ `dontKnowToo${index + 1}` }
              >
                {qtd}
              </td>
              <td
                className="dontKnowYet"
                data-testid={ `dontKnowToo${index + 1}` }
              >
                {`R$ ${price}`}
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
};

export default ClientCheckoutProducts;
