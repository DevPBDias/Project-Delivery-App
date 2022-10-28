import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Loading extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <form className="login">
          <label className="label" htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your email"
              data-testid="input-gravatar-email"
            />
          </label>
          <label className="label" htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type your name"
              data-testid="input-player-name"
            />
          </label>
          <button
            type="button"
            name="login-button"
            data-testid="btn-play"
          >
            Login
          </button>
          <Link to="/cadastro">
            <button
              className="button-config"
              type="button"
              name="config-button"
              data-testid="btn-settings"
            >
              Ainda não tenho conta
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
