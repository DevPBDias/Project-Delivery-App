import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { requestData } from '../services/requests';

function Provider({ children }) {
  const [value, setValue] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    async function products() {
      try {
        const getProducts = await requestData('/customer/products');
        console.log(getProducts); // lembrar de comentar essa linha
        setProductsArray(getProducts);
      } catch (error) {
        console.log(error);
      }
    }
    products();
  }, []);

  const contextType = {
    value,
    setValue,
    productsArray,
    setProductsArray,
  };

  const contextTypeTest = useMemo(() => (contextType), [value, productsArray]);

  return (
    <Context.Provider value={ contextTypeTest }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
