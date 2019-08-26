import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Services from '../services/auth.services'
import '../styles/navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.services = new Services
    }
    
    
    render() {
        
        const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'Hello baby'

        if(this.props.userInSession) {
            if(this.props.userRole === 'PROFESSIONAL') {
                return (
                    <div>
                        <div className="container">
                            <div className="row">
                                <Link to="/" className="col-md-8 font-weight-light logo logo-link">ThinkApp</Link>
                                <div className="col-md-4">
                                    <Link to="/professional/area" onClick={this.logout} className="link">Area Profesional</Link>
                                    <Link to="/auth/logout" onClick={this.props.logout} className="link">Logout</Link>
                                </div>
                            </div>
                        </div>
                        <div>Bienvenido/a {saludo}</div>
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
                            <Link to="/auth/login" className="link">Login</Link>
                            <Link to="/auth/signup" className="link">Signup</Link>
                        </div>
                    </div>
                </div>
            ) 
        }
    }

}
export default Navbar