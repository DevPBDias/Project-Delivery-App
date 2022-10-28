import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="customer/products" element={ <Checkout /> } />
      <Route exact path="/" element={ <Navigate to="/Login" /> } />
    </Routes>
  );
}

export default App;
