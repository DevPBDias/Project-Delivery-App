import React, { useState } from 'react';
import SelectSellers from './SelectSellers';

function ClientCheckoutAddress() {
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const getAddress = ({ target }) => {
    setAddress(target.value);
    localStorage.setItem('address', JSON.stringify(target.value));
  };

  const getNumber = ({ target }) => {
    setNumber(target.value);
    localStorage.setItem('number', JSON.stringify(target.value));
  };

  return (

    <table className="client-checkout-address">
      <thead>
        <tr>
          <th>P. Vendedora Responsável</th>
          <th>Endereço</th>
          <th>Número</th>
        </tr>
      </thead>
      <tbody>
        <tr key="table">
          <td
            className="vendedora"
          >
            <SelectSellers />
          </td>
          <td
            className="endereco"
          >
            <input
              onChange={ getAddress }
              value={ address }
              data-testid="customer_checkout__input-address"
              type="text"
              name="input"
              placeholder="digite aqui"
            />
          </td>
          <td
            className="numero"
          >
            <input
              onChange={ getNumber }
              value={ number }
              data-testid="customer_checkout__input-address-number"
              type="text"
              name="input"
              placeholder="digite aqui"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ClientCheckoutAddress;
