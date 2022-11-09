import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestData } from '../services/requests';

function MyOrders() {
  const [myOrders, setMyOrders] = useState();
  const history = useHistory();

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

  useEffect(() => {
    async function sales() {
      try {
        const userInfo = JSON.parse(localStorage.getItem('user'));

        const getOrders = await requestData('orders');

        const findOrdersUser = getOrders.filter((mine) => mine.userId === userInfo.id);

        setMyOrders(findOrdersUser);
      } catch (error) {
        console.log(error);
      }
    }

    sales();
  }, []);

  return (
    <div>
      { myOrders
        && myOrders.map((order, index) => (
          <button
            key={ index }
            type="button"
            name="card-order-button"
            onClick={ () => history.push(`/customer/orders/${index + 1}`) }
          >
            <div key={ index }>
              <p data-testid={ `customer_orders__element-order-id-${index + 1}` }>
                {`Pedido 000${index + 1}`}
              </p>
              <p data-testid={ `customer_orders__element-delivery-status-${index + 1}` }>
                {`${order.status}`}
              </p>
              <p data-testid={ `customer_orders__element-order-date-${index + 1}` }>
                {`${dateFormat(order.saleDate)}`}
              </p>
              <p data-testid={ `customer_orders__element-card-price-${index + 1}` }>
                {`${moneyBrFormat(order.totalPrice)}`}
              </p>
              <p>--------------------</p>
            </div>
          </button>
        ))}

    </div>
  );
}

export default MyOrders;
