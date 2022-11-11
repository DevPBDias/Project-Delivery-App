import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
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
    <Container className="d-flex flex-column">
      <Button
        className="mb-3 align-self-end shadow"
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ isDisabled }
        onClick={ () => history.push('/customer/checkout') }
      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Ver Carrinho: ${formatPrice}`}
        </span>
      </Button>
      <Row xs={ 1 } sm={ 2 } md={ 3 } lg={ 4 }>
        {productsArray.map((elP, index) => (
          <ProductCard
            key={ elP.id }
            item={ elP }
            indexP={ index }
            onChange={ setTotalValue }
          />))}
      </Row>
    </Container>
  );
}
