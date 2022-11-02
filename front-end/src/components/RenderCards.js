import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import ProductCard from './ProductCard';

export default function RenderCards() {
  const {
    productsArray,
    value,
  } = useContext(Context);

  useEffect(() => {
    async function products() {
      try {
        console.log(value); // lembrar de comentar essa linha
      } catch (error) {
        console.log(error);
      }
    }
    products();
  }, [value]);

  return (
    <div>
      {productsArray
        .map((elP) => <ProductCard key={ elP.id } item={ elP } value={ value } />)}
    </div>
  );
}
