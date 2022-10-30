import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/customer" component={ User } />
    </Switch>
  );
}

export default App;
