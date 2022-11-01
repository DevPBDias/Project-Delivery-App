import React from 'react';
import Header from '../components/Header';
import ProductsBtn from '../components/ProductsBtn';
import OrdersBtn from '../components/CustomerOrdersBtn';
import LogOutBtn from '../components/LogOutBtn';

function Products() {
  return (

    <div>
      <header>
        <Header
          FirstNavigationLink={ ProductsBtn }
          SecondNavegationLink={ OrdersBtn }
          ThirdNavegationLink={ LogOutBtn }
        />
      </header>
    </div>
  );
}

export default Products;
