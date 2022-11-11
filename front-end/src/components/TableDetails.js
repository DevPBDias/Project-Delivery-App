import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestOrderDetails } from '../services/requests';

function TableDetails() {
  const [table, setTable] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getOrders = async () => {
      const result = await requestOrderDetails(`/orders/${id}`, id);
      setTable(result.products);
      console.log(result.products);
    };
    getOrders();
  }, []);

  return (
    <div>
      <thead>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </thead>

      {
        table.map((ele, i) => (
          <tbody
            key={ ele.id }
          >
            <th
              data-testid={ `seller_order_details__element-order-table-item-number-${i}` }
            >
              {ele.id}

            </th>
            <th
              data-testid={ `seller_order_details__element-order-table-name-${i}` }
            >
              {ele.name}

            </th>
            <th
              data-testid={ `seller_order_details__element-order-table-quantity-${i}` }
            >
              {ele.quantity}

            </th>
            <th
              data-testid={ `seller_order_details__element-order-table-unit-price-${i}` }
            >
              {ele.price}

            </th>
            <th
              data-testid={ `seller_order_details__element-order-table-sub-total-${i}` }
            >
              {ele.price * ele.quantity}

            </th>
          </tbody>
        ))
      }

    </div>
  );
}

export default TableDetails;
