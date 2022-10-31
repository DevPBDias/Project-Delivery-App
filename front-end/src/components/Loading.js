import React from 'react';
import icon from '../images/loadingCoffee.png';

function Loading() {
  return (
    <div>
      <h1>Loading...</h1>
      <img src={ icon } alt="loadingCoffee" />
    </div>
  );
}

export default Loading;
