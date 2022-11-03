import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { requestData } from '../services/requests';

function Provider({ children }) {
  const [checkoutArray, setCheckoutArray] = useState([]);
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    async function products() {
      try {
        const getProducts = await requestData('/customer/products');
        // console.log(getProducts); // lembrar de comentar essa linha
        setProductsArray(getProducts);
      } catch (error) {
        console.log(error);
      }
    }
    products();
  }, []);

  const contextType = {
    checkoutArray,
    setCheckoutArray,
    productsArray,
    setProductsArray,
  };

  const contextTypeTest = useMemo(() => (contextType), [checkoutArray, productsArray]);

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
