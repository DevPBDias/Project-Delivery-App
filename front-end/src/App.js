import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';

function App() {
  const [entrance, setEntrance] = useState(false);

  useEffect(() => {
    setEntrance(true);
  }, []);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={ () => (entrance ? <Redirect to="/login" /> : null) }
      />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/products" component={ User } />
    </Switch>
  );
}

export default App;
