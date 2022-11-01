import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({
  item,
}) {
  return (
    <div
      className="products-content"
    >
      <p
        data-testid={ `customer_products__element-card-price-${item.id}` }
      >
        {item.price}

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
          data-testid={ `customer_products__button-card-rm-item-${item.id}` }
          type="button"
        >
          -

        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${item.id}` }
        />
        <button
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
};

export default ProductCard;
