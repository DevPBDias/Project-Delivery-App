import React, { Component } from 'react';
import LogoGroup from '../components/LogoGroup';
import Loading from '../components/Loading';
import FormsLogin from '../components/FormsLogin';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      fetching: false,
    };
  }

  render() {
    const { fetching } = this.state;
    return (
      fetching ? <Loading />
        : (
          <div className="App">
            <LogoGroup />
            <FormsLogin />
          </div>
        )
    );
  }
}

export default Login;
