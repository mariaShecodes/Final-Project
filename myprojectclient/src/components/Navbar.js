import React, { Component } from 'react'
// import Logo from 'ruta' y en img src={}
// import "./style..."

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <a href="/">
                    <img src="#" alt="Logo"></img>
                    <span className="font-weight-light">Nombre del Proyecto</span>
                </a>
                <a href="/auth/login">Login</a>
                <a href="/auth/signup">Signup</a>
                <a href="/auth/logout">Logout</a>
            </div>
        )
    }

}
export default Navbar