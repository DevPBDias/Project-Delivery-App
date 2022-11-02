import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function ProductCard({
  item,
  value,
}) {
  const {
    setValue,
    productsArray,
  } = useContext(Context);

  const oldValue = item.price;

  const handleColumn = ({ target }) => {
    const findProduct = productsArray.filter((elP) => elP.name === target.name);
    setValue((oldArray) => [...oldArray, findProduct[0]]);
    console.log(price);
  };

  const handleColumnMinus = ({ target }) => {
    if (value === 0) return setValue(0);
    const index1 = value.findIndex((elP) => elP.name === target.name);
    setValue(value.filter((_, index) => index !== index1));
  };

  const getCount = () => {
    const filter = value.filter((elP) => elP.name === item.name);
    return filter.length;
  };

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
          value={ getCount() }
          size="1"
          data-testid={ `customer_products__input-card-quantity-${item.id}` }
        />
        <button
          name={ item.name }
          onClick={ handleColumn }
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
  value: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProductCard;
