import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import User from './pages/User';
import ClientOrders from './pages/ClientOrders';

function App() {
  const [entrance, setEntrance] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setEntrance(true);
  }, []);

  useEffect(() => {
    const userLogged = localStorage.getItem('user');
    if (userLogged) {
      setHasToken(true);
    }
  }, []);

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
        <Route
          exact
          path="/login"
          render={ () => (hasToken ? <Redirect to="/customer/products" /> : null) }
        />
        <Route exact path="/customer/orders" component={ ClientOrders } />
        <Route exact path="/customer/orders/:id" component={ User } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/register" component={ Register } />
      </Switch>
    </Provider>
  );
}

export default App;
