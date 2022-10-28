import React, { Component } from 'react';
import logo from '../images/unnamed.png';
import '../App.css';

export default class LogoGroup extends Component {
  render() {
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
}
