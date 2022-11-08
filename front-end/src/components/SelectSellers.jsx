import React, { useEffect, useState } from 'react';
import { requestData } from '../services/requests';

function SelectSellers() {
  const [dropDownValue, setDropDownValue] = useState('');

  const [arraySellers, setArraySellers] = useState([]);

  useEffect(() => {
    async function getSellers() {
      try {
        const data = await requestData('/user/get-all');
        console.log(data);
        const filterSeller = data.filter((person) => person.role === 'seller');
        localStorage.setItem('sellers', JSON.stringify(filterSeller));
        localStorage.setItem('selectedSeller', JSON.stringify(filterSeller[0]));
        setDropDownValue(filterSeller[0]);
        setArraySellers(filterSeller);
      } catch (error) {
        console.log(error);
      }
    }
    getSellers();
  }, []);

  const getValue = ({ target }) => {
    console.log(arraySellers);
    const findSellers = arraySellers.find((elS) => elS.name === target.value);
    localStorage.setItem('selectedSeller', JSON.stringify(findSellers));
    const value = JSON.parse(localStorage.getItem('selectedSeller')).name;
    setDropDownValue(value);
  };

  const sellers = (
    <div>
      <form>
        <select
          data-testid="customer_checkout__select-seller"
          value={ dropDownValue }
          onChange={ getValue }
        >
          {arraySellers
            .map((el) => <option key={ el.email } value={ el.name }>{el.name}</option>)}
        </select>
      </form>
    </div>
  );
  return (sellers);
}

export default SelectSellers;
