import React, { useState, useEffect } from 'react';
import { requestData } from '../services/requests';

function SelectSellers() {
  const [sellersArray, setSellers] = useState([]);
  useEffect(() => {
    async function getSellers() {
      try {
        const data = await requestData('/user/get-all');
        const filterSeller = data.filter((person) => person.role === 'seller');
        setSellers(filterSeller);
      } catch (error) {
        console.log(error);
      }
    }
    getSellers();
  }, [sellersArray]);

  const sellers = (
    <div>
      <form>
        <select data-testid="customer_checkout__select-seller">
          {sellersArray
            .map((el) => <option key={ el.email } value={ el.id }>{el.name}</option>)}
        </select>
      </form>
    </div>
  );
  return (sellers);
}

export default SelectSellers;
