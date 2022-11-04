import React, { useState } from 'react';
import Header from '../components/Header';
import ClientCheckoutProducts from '../components/ClientCheckoutProducts';
import ClientCheckoutAddress from '../components/ClientCheckoutAddress';
import CheckOutBtn from '../components/CheckOutBtn';

function Checkout() {
  const [checkoutArray, setCheckoutArray] = useState([]);
  const totalValue = JSON.parse(localStorage.getItem('valorTotal'));
  const arrayProducts = JSON.parse(localStorage.getItem('carrinho'));
  const formatPrice = (value) => parseFloat(value)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const handleRemove = (name) => {
    const removeArray = arrayProducts.filter((elP) => elP.name !== name);
    console.log(name);
    setCheckoutArray(removeArray);
    localStorage.setItem('carrinho', JSON.stringify(removeArray));
    console.log(checkoutArray);

    const arrayToCalc = JSON.parse(localStorage.getItem('carrinho'));

    console.log(arrayToCalc);

    let sum = 0;
    arrayToCalc.forEach((el) => {
      const elSum = el.qty * Number(el.price);
      sum += elSum;
    });
    localStorage.setItem('valorTotal', JSON.stringify(sum));
    return removeArray;
  };

  return (
    <div className="checkout-body">
      <Header />
      <br />
      <div className="finalize-order">
        <h2>Finalizar pedido</h2>
        <ClientCheckoutProducts
          productsArray={ arrayProducts }
          formatPrice={ formatPrice }
          onClick={ handleRemove }
        />
        <h3
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: ${formatPrice(totalValue)}`}

        </h3>
      </div>
      <div className="details-and-delivery-addres">
        <h2>Detalhes e Endereço para Entrega</h2>
        <ClientCheckoutAddress />
        <CheckOutBtn />
      </div>
    </div>
  );
}

export default Checkout;
