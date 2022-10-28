import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="customer/checkout" element={ <Checkout /> } />
      <Route path="login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/Login" /> } />
    </Routes>
  );
}

export default App;
