import React, { useContext, useEffect, useState } from 'react';
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
    <div
      className="products-content"
    >
      <p
        data-testid={ `customer_products__element-card-price-${item.id}` }
      >
        {parseFloat(oldValue)
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}

      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${item.id}` }
        src={ item.urlImage }
        width="100px"
        alt="verificar depois"
      />
      <p
        data-testid={ `customer_products__element-card-title-${item.id}` }
      >
        {item.name}

      </p>
      <div>
        <button
          name={ item.name }
          onClick={ handleColumnMinus }
          data-testid={ `customer_products__button-card-rm-item-${item.id}` }
          type="button"
        >
          -

        </button>
        <input
          name={ item.name }
          value={ inputValue }
          onChange={ onChangeHandler }
          size="1"
          data-testid={ `customer_products__input-card-quantity-${item.id}` }
        />
        <button
          name={ item.name }
          onClick={ handleColumnPlus }
          data-testid={ `customer_products__button-card-add-item-${item.id}` }
          type="button"
        >
          +

        </button>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
  indexP: PropTypes.number.isRequired,
  onChange: PropTypes.number.isRequired,
};

export default ProductCard;
