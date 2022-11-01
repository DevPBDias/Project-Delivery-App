import React, { useState, useEffect } from 'react';
import { requestData } from '../services/requests';
import ProductCard from './ProductCard';

export default function RenderCards() {
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

  return (
    <div>
      {productsArray.map((elP) => <ProductCard key={ elP.id } item={ elP } />)}
    </div>
  );
}
