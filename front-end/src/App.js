import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import ClientOrders from './pages/ClientOrders';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrder from './pages/SellerOrder';
import SellerDetails from './pages/SellerDetails';

function App() {
  const [entrance, setEntrance] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setEntrance(true);
  }, []);

  useEffect(() => {
    const userLogged = localStorage.getItem('user');

    if (userLogged) {
      history.push('/customer/products');
    }
  }, [history]);

  return (
    <Provider>
      <Switch>
        <Route
          exact
          path="/"
          render={ () => (entrance ? <Redirect to="/login" /> : null) }
        />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/orders" component={ ClientOrders } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/orders/:id" component={ CustomerOrderDetails } />
        <Route exact path="/seller/orders" component={ SellerOrder } />
        <Route exact path="/seller/orders/:id" component={ SellerDetails } />
      </Switch>
    </Provider>
  );
}

export default App;
