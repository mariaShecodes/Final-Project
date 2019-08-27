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
                    <div>
                        <div className="container">
                            <div className="row">
                                <Link to="/" className="col-md-8 font-weight-light logo logo-link">ThinkApp</Link>
                                <div className="col-md-4">
                                    <Link to="/professional/area" onClick={this.logout} className="link-professional">Area Profesional</Link>
                                    <Link to='/professional/new-patient' className="link-professional">Añadir Paciente</Link>  
                                    <Link to="/auth/logout" onClick={this.props.logout} className="link-professional">Logout</Link>
                                </div>
                            </div>
                            <div className="identi">
                                <div className="saludo">Bienvenido/a {saludo}</div>
                                <img src={image} alt="Image user" className="image-user"/>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className="container">
                            <div className="row">
                                <Link to="/" className="col-md-8 font-weight-light logo logo-link">ThinkApp</Link>
                                <div className="col-md-4">
                                    <Link to="/patient/area" onClick={this.logout} className="link">Area Personal</Link>
                                    <Link to='/patient/new-register'>Añadir Autorregistro</Link> 
                                    <Link to="/auth/logout" onClick={this.props.logout} className="link">Logout</Link>
                                </div>
                            </div>
                        </div>
                        <div>Bienvenido/a {saludo}</div>
                    </div>
                )
            }    
        } else {
            return(
                <div className="container">
                    <div className="row">
                        <Link to="/" className="col-md-8 font-weight-light logo logo-link">ThinkApp</Link>
                        <div className="col-md-4">
                            <Button variant="primary" onClick={() => this.props.handleShow()}>Login</Button>
                            {/* <Link to="/auth/login" className="link">Login</Link> */}
                            <Link to="/auth/signup" className="link">Signup</Link>
                        </div>
                    </div>
                </div>
            ) 
        }
    }

}
export default Navbar