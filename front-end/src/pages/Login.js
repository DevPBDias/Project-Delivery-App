import React, { Component } from 'react';
import LogoGroup from '../components/LogoGroup';
import Loading from '../components/Loading';
import FormsLogin from '../components/FormsLogin';
// import { requestData } from '../services/requests';

// usar funcional no lugar de classe e context hooks
class Login extends Component {
  constructor() {
    super();
    this.state = {
      fetching: false,
    };
  }

  // usar setLeaderBoard para setar o estado de um contexto

  // const getLeaderboard = (endpoint) => requestData(endpoint)
  // .then((response) => setLeaderboard(response))
  // .catch((error) => console.log(error));

  render() {
    const { fetching } = this.state;
    return (
      fetching ? <Loading />
        : (
          <div className="App">
            <p>{api}</p>
            <LogoGroup />
            <FormsLogin />
          </div>
        )
    );
  }
}

export default Login;
