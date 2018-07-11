import React from 'react';
import LoginFormContainer from './session/log_in_form_container';
import SignupFormContainer from './session/sign_up_form_container';
import Greeting from './greeting/greeting';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={Greeting} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
  );
};


export default App;
