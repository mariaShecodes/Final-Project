import React, { Component } from 'react'
import AuthServices from '../services/auth.services'

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

            theLoggedUser.data.role === 'PROFESSIONAL' ? this.props.history.push('/professional/area') : this.props.history.push('/patient/area')

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
                    Profesional? <input type="checkbox" name="role" value={this.state.role} onChange={this.handleCheckChange}></input>
                    <input type="submit" value="Iniciar sesión" />
                </form>
            </div>

        )
    }
}

export default Login

