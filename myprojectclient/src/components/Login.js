import React, { Component } from 'react'
import AuthServices from '../services/auth.services'

import { Button, Form } from 'react-bootstrap'

import '../styles/login.css'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            role: ''
        }
        this.authServices = new AuthServices()
    }
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleCheckChange = e => {
        const {name, checked} = e.target
        console.log(checked)
        console.log(e.target)
        this.setState({[name]: checked})
    }
    
    handleFormSubmit = e => {
        e.preventDefault()
        const { username, password, role } = this.state
        this.authServices.login(username, password, role )
        .then(theLoggedUser => {
            this.setState({
                username: '',
                password: '',
                role: ''
            })
            this.props.setUser(theLoggedUser)

           
        // SUSTITUIMOS LA LÍNEA DE ABAJO POR LA PROPS QUE HEMOS DEFINIDO EN APP.JS
            // theLoggedUser.data.role === 'PROFESSIONAL' ? this.props.history.push('/professional/area') : this.props.history.push('/patient/area')
            this.props.checkRedirect(theLoggedUser)


            console.log(theLoggedUser.data)
            console.log(theLoggedUser.data.role)

            })
            .catch(err => console.log({err}))
    }

    render() {

        return (
            <div className="login">
                <form onSubmit={this.handleFormSubmit}>

                <Form.Label className="label-login">Usuario</Form.Label>
                    <Form.Control name="username" type="text" value={this.state.username} onChange={this.handleInputChange} placeholder="Nombre de Usuario" />
         
                <Form.Label className="label-login">Contraseña</Form.Label>
                    <Form.Control name="password" type="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
               
                <Form.Group controlId="formBasicCheckbox" className="label-login">
                    <Form.Check name="role" type="checkbox" value={this.state.role} onChange={this.handleCheckChange} label="¿Profesional?" />
                </Form.Group>
               
                <Button variant="info" type="submit" className="button-session">Iniciar sesión</Button>
                </form>
            </div>
        )
    }
}

export default Login


{/* Usuario: <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
Contraseña: <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
Profesional? <input type="checkbox" name="role" value={this.state.role} onChange={this.handleCheckChange}></input>
<input type="submit" value="Iniciar sesión" /> */}