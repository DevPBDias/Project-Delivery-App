// import React, { useEffect, useState } from 'react';
import React from 'react';
import customerOrders from '../services/mockSales';
// import { requestData } from '../services/requests';

function MyOrders() {
//   const [orders, setOrders] = useState();

  function dateFormat(orderDate) {
    const date = new Date(orderDate);
    const day = date.getDate();
    const month = date.getMonth();
    const fullYear = date.getFullYear().toString();
    const year = fullYear.substring(fullYear.length - 2);
    const result = `${day}/${month}/${Number(year)}`;

    return result;
  }

  function moneyBrFormat(orderPrice) {
    const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
      .format(orderPrice);
    const result = `${money}`;

    return result;
  }

  //   useEffect(() => {
  //      function sales() {
  //       // const { id } = localStorage.getItem('userLogged');
  //       // const ordersUser = await requestData(`/customer/orders/${id}`);
  //      setOrders(day);
  //       console.log(orders);
  //       // setOrders(ordersUser);
  //     }
  //     sales();
  //   }, [orders]);

  return (
    <div>
      {
        customerOrders.map((order, index) => (
          <div key={ index }>
            <p data-testid="customer_orders__element-order-id-<id>">
              {`Pedido 000${index + 1}`}
            </p>
            <p data-testid=" customer_orders__element-delivery-status-<id>">
              {`${order.status}`}
            </p>
            <p data-testid="customer_orders__element-order-date-<id>">
              {`${dateFormat(order.saleDate)}`}
            </p>
            <p data-testid="customer_orders__element-card-price-<id>">
              {`${moneyBrFormat(order.totalPrice)}`}
            </p>
          </div>))
      }
    </div>
  );
}

export default MyOrders;
