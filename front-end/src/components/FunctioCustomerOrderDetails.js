import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestOrderDetails } from '../services/requests';

const moment = require('moment');

export default function FunctionCustomerOrderDetails() {
  const { id } = useParams();
  const [currOrder, setCurrOrder] = useState([]);
  const [product, setProduct] = useState([]);
  const formatPrice = (value) => parseFloat(value)
    .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const value = (JSON.parse(localStorage.getItem('selectedSeller'))).name;

  useEffect(() => {
    const getOrderDetail = async () => {
      const result = await requestOrderDetails(`/orders/${id}`, id);
      setCurrOrder(result);
      setProduct(result.products);
    };
    getOrderDetail();
  }, []);

  return (
    <div>
      { currOrder && (
        <div>
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { currOrder.id }
          </p>
          <br />
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {value}
          </p>
          <br />
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { moment(currOrder.saleDate).locale('pt-br').format('DD/MM/YYYY') }
          </p>
          <br />
          <p
            data-testid={ 'customer_order_details__'
              + 'element-order-details-label-delivery-status' }
          >
            { currOrder.status }
          </p>
          <br />
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled={ currOrder.status !== 'Em Trânsito' }
          >
            Marcar como entregue
          </button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>
              Item
            </th>
            <th>
              Description
            </th>
            <th>
              Quantity
            </th>
            <th>
              Unit value
            </th>
            <th>
              Sub-total
            </th>
          </tr>
        </thead>
        {
          product.map((prod, index) => (
            <tbody
              key={ prod.id }
            >
              <th
                data-testid={ 'customer_order_details__element-'
                + `order-table-item-number-${index}` }
              >
                {prod.id}
              </th>
              <th
                data-testid={ 'customer_order_details__element-'
                 + `order-table-name-${index}` }
              >
                {prod.name}
              </th>
              <th
                data-testid={ 'customer_order_details__element-order'
                 + `-table-quantity-${index}` }
              >
                {prod.quantity}
              </th>
              <th
                data-testid={ 'customer_order_details__element-order'
                 + `-table-unit-price-${index}` }
              >
                {
                  `${formatPrice(prod.price)}`
                }
              </th>
              <th
                data-testid={ 'customer_order_details__element-order-'
                + `table-sub-total-${index}` }
              >
                {
                  `${formatPrice(prod.price * prod.quantity)}`
                }
              </th>
            </tbody>
          ))
        }
      </table>

      <div
        data-testid="customer_order_details__element-order-total-price"
      >
        {
          `${formatPrice(currOrder.totalPrice)}`
        }
      </div>
    </div>
  );
}
