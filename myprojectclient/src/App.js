import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './components/Login';
import ProfessionalSignup from './components/Professional-form';
import ProfessionalArea from './components/Professional-area';



class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/signup" exact component={ProfessionalSignup} />
          <Route path="/professional/area" exact component={ProfessionalArea} />
        </Switch>
      </>
    )
  }

}
export default App;
