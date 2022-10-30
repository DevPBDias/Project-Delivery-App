import React from 'react';
import LogoGroup from '../components/LogoGroup';
import Loading from '../components/Loading';
import FormsLogin from '../components/FormsLogin';
// import { requestData } from '../services/requests';

function Login() {
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

export default Login;
