import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Col, InputGroup, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function ProductCard({
  item,
  indexP,
  onChange,
}) {
  const {
    productsArray,
  } = useContext(Context);

  const [inputValue, setInputValue] = useState(0);
  const [change, setChange] = useState(false);

  const oldValue = item.price;

  const onChangeHandler = (event) => {
    setInputValue(Number(event.target.value));
  };

  const handleColumnPlus = () => {
    setInputValue(inputValue + 1);
  };

  const handleColumnMinus = () => {
    if (inputValue === 0) return setInputValue(0);
    setInputValue(inputValue - 1);
  };

  useEffect(() => {
    async function didMountProducts() {
      try {
        const createArrayQty = productsArray.map((elP) => {
          const arrayWithQty = {
            ...elP,
            qty: 0,
          };
          return arrayWithQty;
        });
        localStorage.setItem('carrinho', JSON.stringify(createArrayQty));
        localStorage.setItem('valorTotal', 0);
      } catch (error) {
        console.log(error);
      }
    }
    didMountProducts();
  }, []);

  useEffect(() => {
    async function getQtyProducts() {
      try {
        setChange(true);
        if (change === true) {
          const getArrayLS = [...JSON.parse(localStorage.getItem('carrinho'))];
          getArrayLS[indexP].qty = inputValue;
          localStorage.setItem('carrinho', JSON.stringify(getArrayLS));

          const getFromLS = JSON.parse(localStorage.getItem('carrinho'));

          let sum = 0;
          getFromLS.forEach((el) => {
            const elSum = el.qty * Number(el.price);
            sum += elSum;
          });
          console.log(sum);
          localStorage.setItem('valorTotal', sum); // verificar necessidade de salvar o valor total no localStorage
          onChange(sum);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getQtyProducts();
  }, [inputValue]);

  return (
    <Col className="mb-4">
      <Card className="products-content shadow">
        <Card.Title
          className="text-center pt-2 bg-light rounded-top"
          style={ { height: '56px' } }
          data-testid={ `customer_products__element-card-title-${item.id}` }
        >
          {item.name}

        </Card.Title>
        <div
          className="m-auto"
          style={ { maxWidth: '259px', maxHeight: '259px', overflow: 'hidden' } }
        >
          <Card.Img
            data-testid={ `customer_products__img-card-bg-image-${item.id}` }
            src={ item.urlImage }
            alt="verificar depois"
            style={ { maxHeight: '214px' } }
          />
        </div>
        <Card.Body className="d-flex bg-light rounded-bottom">
          <Card.Text
            data-testid={ `customer_products__element-card-price-${item.id}` }
            className="text-center fw-bold m-0"
          >
            {parseFloat(oldValue)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}

          </Card.Text>
          <InputGroup
            size="xs"
            className="ms-auto"
            style={ { width: '120px' } }
          >
            <Button
              className="btn-danger ms-auto fw-bold fs-4 py-0 lh-1"
              name={ item.name }
              onClick={ handleColumnMinus }
              data-testid={ `customer_products__button-card-rm-item-${item.id}` }
              type="button"
            >
              -
            </Button>
            <Form.Control
              className="py-0 lh-1"
              name={ item.name }
              value={ inputValue }
              onChange={ onChangeHandler }
              size="1"
              data-testid={ `customer_products__input-card-quantity-${item.id}` }
            />
            <Button
              className="btn-success fw-bold fs-4 py-0 lh-1"
              name={ item.name }
              onClick={ handleColumnPlus }
              data-testid={ `customer_products__button-card-add-item-${item.id}` }
              type="button"
            >
              +
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}
ProductCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  indexP: PropTypes.number.isRequired,
  onChange: PropTypes.number.isRequired,
};

export default ProductCard;
