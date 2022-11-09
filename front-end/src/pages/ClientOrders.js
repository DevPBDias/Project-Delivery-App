import React from 'react';
import MyOrders from '../components/MyOrders';
import Header from '../components/Header';

function ClientOrders() {
  return (
    <div>
      <Header pageRoute="PRODUTOS" />
      <MyOrders />
    </div>
  );
}

export default ClientOrders;
