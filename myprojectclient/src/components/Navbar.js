import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Services from '../services/auth.services'

import '../styles/navbar.css'

class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {showModal: false }
        this.services = new Services
    }
 
    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })

    render() {

        const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'Hello baby'
        const image = this.props.userImage
      

        if(this.props.userInSession) {
            if(this.props.userRole === 'PROFESSIONAL') {
                return (
                    <div className="navbar-professional">
                        <div className="container ">
                            <div className="row">
                                <Link to="/" className="col-md-8 font-weight-light logo logo-link logo-session">ThinkApp</Link>
                                <div className="col-md-4">
                                    <div className="row">
                                        <Link to="/professional/area" onClick={this.logout} className="link-professional link" ink>Area Profesional</Link>
                                        <Link to='/professional/new-patient' className="link-professional link">Añadir Paciente</Link>  
                                        <Link to="/" onClick={this.props.logout} className="link-professional link">Logout</Link>
                                    </div>
                                    <div className="row identity">
                                        <div className="saludo">Bienvenido/a {saludo}</div>
                                        <img src={image} alt="Image user" className="image-user"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="navbar-professional">
                        <div className="container">
                            <div className="row">
                                <Link to="/" className="col-md-8 font-weight-light logo logo-link logo-session">ThinkApp</Link>
                                <div className="col-md-4">
                                    <Link to="/patient/area" onClick={this.logout} className="link-professional link">Area Personal</Link>
                                    <Link to='/patient/new-register' className="link-professional link" >Añadir Autorregistro</Link> 
                                    <Link to="/" onClick={this.props.logout} className="link-professional link">Logout</Link>
                                </div>
                                <div className="row identity">
                                    <div className="saludo">Bienvenido/a {saludo}</div>
                                    <img src={image} alt="Image user" className="image-user"/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }    
        } else {
            return(
                <div className="container container-home">
                    <div className="row">
                        <Link to="/" className="col-md-8 font-weight-light logo logo-link">ThinkApp</Link>
                        <div className="col-md-4">
                            <Link className="link-simple link" onClick={() => this.props.handleShow()}>Login</Link>
                            <Link to="/auth/signup" className="link-simple link">Signup</Link>
                        </div>
                    </div>
                </div>
            ) 
        }
    }

}
export default Navbar