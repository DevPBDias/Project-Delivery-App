import React from 'react';
import Header from '../components/Header';
import ClientCheckoutProducts from '../components/ClientCheckoutProducts';
import ClientCheckoutAddress from '../components/ClientCheckoutAddress';
import ProductsBtn from '../components/ProductsBtn';
import CustomerOrdersBtn from '../components/CustomerOrdersBtn';
import LogOutBtn from '../components/LogOutBtn';
import CheckOutBtn from '../components/CheckOutBtn';

function Checkout() {
  const arrayProductsMock = [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      qtd: 3,
      price: 2.20,
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      qtd: 2,
      price: 7.50,
    },
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      qtd: 1,
      price: 2.49,
    },
  ];
  return (
    <div className="checkout-body">
      <Header
        FirstNavigationLink={ ProductsBtn }
        SecondNavegationLink={ CustomerOrdersBtn }
        ThirdNavegationLink={ LogOutBtn }
      />
      <br />
      <div className="finalize-order">
        <h2>Finalizar pedido</h2>
        <ClientCheckoutProducts
          productsArray={ arrayProductsMock }
        />
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
