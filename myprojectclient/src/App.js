import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import AuthServices from './services/auth.services'
import ProtectedRoute from './components/routes/ProtectedRoute'

import { withRouter } from 'react-router'  // Nos sirve para traernos el history y redirigir en el login

import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import ProfessionalSignup from './components/Professional-form'
import ProfessionalArea from './components/Professional-area'
import PatientSignup from './components/Patient-form'
import PatientDetail from './components/Patient-details'
import PatientArea from './components/Patient-area'
import NewRegister from './components/Register-form'
import RegisterDetail from './components/Register-details'
import {Modal} from 'react-bootstrap'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { loggedInUser: null, show: false, showModalSignup: false }     // loggerInUser te lo traes del ProtectedRoute  
    this.authServices = new AuthServices()
  }
  
  // MODAL SIGNUP
  handleModalOpen = () => this.setState({ showModalSignup: true })
  handleModalClose = () => this.setState({ showModalSignup: false })

  //RUTA REDIRECCIÓN DEL SIGNUP DEL MODAL
  redirectRoute = () =>  this.props.history.push('/professional/area')

  // MODAL LOGIN
  setShow = (value) => this.setState({show: value})
  handleShow = () => this.setShow(true)
  handleClose = () => this.setShow(false)
  
  // INDICAMOS LA RUTA TRAS LOGUEARSE SEGÚN EL ROL DE LA PERSONA
  checkRedirect = (theLoggedUser)=> {
    theLoggedUser.data.role === 'PROFESSIONAL' ? this.props.history.push('/professional/area') : this.props.history.push('/patient/area')
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    console.log("Un componente ha cambiado el usuario en App:", this.state.loggedInUser)
    console.log(this.state.loggedInUser.data._id)
    
    // Traemos el ID de la sesion iniciada desde Local storage 
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
    console.log(this.props)
    
    if(this.state.loggedInUser) {
      return (
        <>
        <Navbar  setUser={this.setTheUser} userInSession={this.state.loggedInUser} userRole={this.state.loggedInUser.data.role} userImage={this.state.loggedInUser.data.imageUrl}logout={this.logout} />
        <Switch>
          <Route path="/" exact component={Home}/>
          <ProtectedRoute path="/professional/area" user={this.state.loggedInUser} component={ProfessionalArea} />
          <Route path="/professional/new-patient" exact component={PatientSignup} />
          <Route path="/professional/details-patient/:id" exact component={PatientDetail} />
          
          <ProtectedRoute path="/patient/area" user={this.state.loggedInUser} component={PatientArea} />
          <Route path="/patient/new-register" exact component={NewRegister} />
          <Route path="/patient/details-register/:id" exact component={RegisterDetail} />
        </Switch>
      </>
    )
  } else {
    return (
      <>
      {/* EN ESTA NAVBAR LE PASAMOS LAS FUNCTION DE MODAL PARA EL LOGIN */}
        <Navbar setShow={this.setShow} handleShow={this.handleShow} handleClose={this.handleClose} setUser={this.setTheUser} userInSession={this.state.loggedInUser} logout={this.logout} />

        <Switch>
          <Route path="/" exact component={Home}/>
          <ProtectedRoute path="/professional/area" user={this.state.loggedInUser} component={ProfessionalArea} />
          <ProtectedRoute path="/patient/area" user={this.state.loggedInUser} component={PatientArea} />
          {/* <Route path="/auth/login" exact render={match => <Login {...match} setUser={this.setTheUser} />} /> */}
        </Switch>

        <Modal show={this.state.show} onHide={this.handleClose} className="bsClass">
          <Modal.Header closeButton>
            <Modal.Title><h3>Iniciar sesión</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body><Login setUser={this.setTheUser} checkRedirect={this.checkRedirect} /></Modal.Body>
        </Modal>

          {/* <Route path="/auth/signup" exact render={match => <ProfessionalSignup {...match} setUser={this.setTheUser} />} /> */}
       
        {/* MODAL SIGNUP */}
        <Modal show={this.state.showModalSignup} onHide={this.handleModalClose}>

          <Modal.Body>
              <ProfessionalSignup setUser={this.setTheUser}  redirectRoute={this.redirectRoute}/>
          </Modal.Body>

        </Modal>
      </>
    )
  }
}
}
export default withRouter(App);
