import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import AuthServices from './services/auth.services'
import ProtectedRoute from './components/routes/ProtectedRoute'

import Navbar from './components/Navbar'
import Login from './components/Login'
import ProfessionalSignup from './components/Professional-form'
import ProfessionalArea from './components/Professional-area'
import PatientSignup from './components/Patient-form'
import PatientArea from './components/Patient-area'



class App extends Component {

  constructor() {
    super()
    this.state = { loggedInUser: null }     // loggerInUser te lo traes del ProtectedRoute  
    this.authServices = new AuthServices()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log("Un componente ha cambiado el usuario en App:", this.state.loggedInUser)
    console.log(this.state.loggedInUser.data._id)
    
    let userID = this.state.loggedInUser.data._id;
    localStorage.setItem('userID', JSON.stringify(userID));
  }

  logout = () => {
    localStorage.removeItem('userID');
    this.authServices.logout()
        .then(x => {
            this.setTheUser(null)            
        })
        .catch(err => console.log(err))
  }

  fetchUser = () => {
    if(this.state.loggedInUser === null) {
      this.authServices.loggedin()
        .then(response => {
          console.log(response)
          this.setState({loggedInUser: response})})
        .catch(x => this.setState({ loggedInUser: false}))
    }
  }
  
  render() {

    this.fetchUser()

    if(this.state.loggedInUser) {
    return (
      <>
        <Navbar setUser={this.setTheUser} userInSession={this.state.loggedInUser} logout={this.logout} />

        <Switch>
          <ProtectedRoute path="/professional/area" user={this.state.loggedInUser} component={ProfessionalArea} />
          <ProtectedRoute path="/patient/area" user={this.state.loggedInUser} component={PatientArea} />
          <Route path="/professional/new-patient" exact component={PatientSignup} />
        </Switch>
      </>
    )
  } else {
    return (
      <>
        <Navbar setUser={this.setTheUser} userInSession={this.state.loggedInUser} logout={this.logout} />

        <Switch>
          <ProtectedRoute path="/professional/area" user={this.state.loggedInUser} component={ProfessionalArea} />
          <ProtectedRoute path="/patient/area" user={this.state.loggedInUser} component={PatientArea} />
          <Route path="/auth/signup" exact render={match => <ProfessionalSignup {...match} setUser={this.setTheUser} />} />
          <Route path="/auth/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} />
        </Switch>
      </>
    )
  }
}
}
export default App;
