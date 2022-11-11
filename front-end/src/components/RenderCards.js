import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
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
      <Row xs={ 1 } sm={ 2 } md={ 3 } lg={ 4 } style={ { marginBottom: '100px' } }>
        {productsArray.map((elP, index) => (
          <ProductCard
            key={ elP.id }
            item={ elP }
            indexP={ index }
            onChange={ setTotalValue }
          />))}
      </Row>
      <Button
        style={ { bottom: '3%', right: '5%', zIndex: '10' } }
        className="align-self-end shadow position-fixed z-index-2 d-none d-sm-block"
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
      <Button
        style={ { bottom: '3%', right: '5%', zIndex: '10', fontSize: '15px' } }
        className="align-self-end shadow position-fixed z-index-2 d-sm-none d-block"
        type="button"
        data-testid="customer_products__button-cart"
        disabled={ isDisabled }
        onClick={ () => history.push('/customer/checkout') }
      >
        <BsCart4
          data-testid="customer_products__checkout-bottom-value"
          size={ 30 }
          className="me-1"
        />
        {formatPrice}
      </Button>
    </Container>
  );
}
