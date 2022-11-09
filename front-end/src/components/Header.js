import React, { useEffect, useState } from 'react';
import ProductsBtn from './ProductsBtn';
import OrdersBtn from './CustomerOrdersBtn';
import LogOutBtn from './LogOutBtn';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    setUserRole(user.role);
  }, [user.role]);

  return (
    <div className="buttons-content">
      <ProductsBtn role={ userRole } />
      <OrdersBtn role={ userRole } />
      <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
      </h3>
      <LogOutBtn />
    </div>
  );
}

export default Header;
