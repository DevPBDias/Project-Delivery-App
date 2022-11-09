import React, { useEffect, useState } from 'react';
import ProductsBtn from './ProductsBtn';
import OrdersBtn from './CustomerOrdersBtn';
import LogOutBtn from './LogOutBtn';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [userRole, setUserRole] = useState();
  const renderBtn = (role) => {
    if (role === 'customer') {
      return (
        <div>
          <OrdersBtn role={ role } />
          <ProductsBtn role={ role } />
        </div>
      );
    }
    return <OrdersBtn role={ role } />;
  };

  useEffect(() => {
    setUserRole(user.role);
  }, []);

  return (
    <div className="buttons-content">
      {renderBtn(userRole)}
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
