import React, { Component } from 'react'
import AuthServices from '../services/auth.services'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            role: '',
        }
        this.authServices = new AuthServices()
    }
    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        
    }
    
    handleFormSubmit = e => {
        e.preventDefault()
        const { username, password, role } = this.state
        this.authServices.login(username, password, role)
        .then(theLoggedUser => {
            this.setState({
                username: '',
                password: '',
                role: '',
            })
            this.props.setUser(theLoggedUser)
            this.props.history.push('/professional/area')

            console.log(theLoggedUser.data)
            console.log(theLoggedUser.data.role)

            })
            .catch(err => console.log({err}))
    }

    render() {

        return (
            <div className="container">
                <h1>Inicio de sesión</h1>
                <form onSubmit={this.handleFormSubmit}>
                    Usuario: <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange} /> <br></br>
                    Contraseña: <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange} /> <br></br>
                   
                    <input type="submit" value="Iniciar sesión" />
                </form>
            </div>

        )
    }
}

export default Login

