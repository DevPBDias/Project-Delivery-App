import React from 'react';
import Header from '../components/Header';
import ClientCheckoutProducts from '../components/ClientCheckoutProducts';
import ClientCheckoutAddress from '../components/ClientCheckoutAddress';
import CheckOutBtn from '../components/CheckOutBtn';

function Checkout() {
  const arrayProducts = JSON.parse(localStorage.getItem('carrinho'));
  const TotalValue = JSON.parse(localStorage.getItem('valorTotal'));
  const formatPrice = (value) => parseFloat(value)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return (
    <div className="checkout-body">
      <Header />
      <br />
      <div className="finalize-order">
        <h2>Finalizar pedido</h2>
        <ClientCheckoutProducts
          productsArray={ arrayProducts }
          formatPrice={ formatPrice }
        />
        <h3
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: ${formatPrice(TotalValue)}`}

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
