import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Services from '../services/auth.services'

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
                    <div className="Navbar">
                        <Link to="/">
                            <img src="#" alt="Logo"></img>
                            <span className="font-weight-light">Nombre del Proyecto</span>
                        </Link>
                        <Link to="/professional/area" onClick={this.logout}>Area Profesional</Link>
                        <Link to="/auth/logout" onClick={this.props.logout}>Logout</Link>
                        <div>Bienvenido/a {saludo}</div>
                    </div>
                )
            } else {
                return (
                    <div className="Navbar">
                        <Link to="/">
                            <img src="#" alt="Logo"></img>
                            <span className="font-weight-light">Nombre del Proyecto</span>
                        </Link>
                        <Link to="/patient/area" onClick={this.logout}>Area Personal</Link>
                        <Link to="/auth/logout" onClick={this.props.logout}>Logout</Link>
                        <div>Bienvenido/a {saludo}</div>
                    </div>
                )
            }    
        } else {
            return(
                <div>
                <Link to="/">
                        <img src="#" alt="Logo"></img>
                        <span className="font-weight-light">Nombre del Proyecto</span>
                </Link>
                <Link to="/auth/login">Login</Link>
                <Link to="/auth/signup">Signup</Link>
                </div>
            ) 
        }
    }

}
export default Navbar