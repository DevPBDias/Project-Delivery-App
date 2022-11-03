import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import ProductCard from './ProductCard';

export default function RenderCards() {
  const [totalValue, setTotalValue] = useState('0.00');
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    productsArray,
  } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    if (Number(totalValue) > 0) setIsDisabled(false);
    if (Number(totalValue) === 0) setIsDisabled(true);
  }, [totalValue]);

  const formatPrice = parseFloat(totalValue)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <div>
      {productsArray
        .map((elP, index) => (<ProductCard
          key={ elP.id }
          item={ elP }
          indexP={ index }
          onChange={ setTotalValue }
        />))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ isDisabled }
        onClick={ () => history.push('/customer/checkout') }
      >
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Ver Carrinho: ${formatPrice}`}
        </p>
      </button>

    </div>
  );
}
