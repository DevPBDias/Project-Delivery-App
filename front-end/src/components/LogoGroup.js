import React from 'react';
import logo from '../images/unnamed.png';
import '../App.css';

function LogoGroup() {
  return (
    <div>
      <img
        src={ logo }
        width="200px"
        alt="Logo do grupo"
      />
    </div>
  );
}

export default LogoGroup;
