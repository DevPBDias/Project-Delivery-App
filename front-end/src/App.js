import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
// import User from './pages/User';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
  const [entrance, setEntrance] = useState(false);

  useEffect(() => {
    setEntrance(true);
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
        <Route exact path="/register" component={ Register } />
      </Switch>
    </Provider>
  );
}

export default App;
