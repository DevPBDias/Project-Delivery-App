import React from 'react';
import SelectSellers from './SelectSellers';
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

function ClientCheckoutAddress() {
  return (

    <table className="client-checkout-address">
      <thead>
        <tr>
          <th data-testid="dontKnowYet">P. Vendedora Responsável</th>
          <th data-testid="dontKnowYet">Endereço</th>
          <th data-testid="dontKnowYet">Número</th>
        </tr>
      </thead>
      <tbody>
        <tr key="table">
          <td
            className="vendedora"
            data-testid="dontKnowToo"
          >
            <SelectSellers />
          </td>
          <td
            className="endereco"
            data-testid="dontKnowToo"
          >
            <input type="text" name="input" placeholder="digite aqui" />
          </td>
          <td
            className="numero"
            data-testid="dontKnowToo"
          >
            <input type="text" name="input" placeholder="digite aqui" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ClientCheckoutAddress;
