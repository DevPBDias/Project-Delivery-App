import React, { useState, useEffect } from 'react';
import OrdersBtn from './CustomerOrdersBtn';
import LogOutBtn from './LogOutBtn';

function HeaderSeller() {
  const [userName, setName] = useState();
  useEffect(() => {
    async function sales() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        setName(user.name);
      } catch (error) {
        console.log(error);
      }
    }
    sales();
  }, [userName]);
  return (
    <div className="buttons-content">
      <OrdersBtn />
      <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {userName}
      </h3>
      <LogOutBtn />
    </div>
  );
}
export default HeaderSeller;
