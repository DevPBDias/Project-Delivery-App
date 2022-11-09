import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { requestData } from '../services/requests';

const moment = require('moment');

function FunctionSellerOrder() {
  const [sales, setSales] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));
  const formatPrice = (value) => parseFloat(value)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  useEffect(() => {
    const getSales = async () => {
      const newSales = await requestData('/orders');
      setSales(newSales);
    };
    getSales();
  }, [user.id]);

  return (
    <div>
      {sales.map((sale) => (
        <Link
          key={ sale.id }
          to={ `/seller/orders/${sale.id}` }
        >
          <div>
            <p
              data-testid={ `seller_orders__element-order-id-${sale.id}` }
            >
              { sale.id }
            </p>
            <p
              data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
            >
              { sale.status }
            </p>
            <p
              data-testid={ `seller_orders__element-order-date-${sale.id}` }
            >
              { moment(sale.saleDate).locale('pt-br').format('DD/MM/YYYY') }
            </p>
            <p
              data-testid={ `seller_orders__element-card-price-${sale.id}` }
            >
              {
                `${formatPrice(sale.totalPrice)}`
              }
            </p>
            <p
              data-testid={ `seller_orders__element-card-address-${sale.id}` }
            >
              { `${sale.deliveryAddress}, ${sale.deliveryNumber}` }
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FunctionSellerOrder;
