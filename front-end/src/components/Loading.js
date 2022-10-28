import React, { Component } from 'react';
import icon from '../images/loadingCoffee.png';

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h1>Loading</h1>
        <img className="coffee" src={ icon } alt="loadingCoffee" />
      </div>
    );
  }
}
