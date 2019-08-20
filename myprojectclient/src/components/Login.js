import React, { Component } from 'react'
import Services  from '../services/auth.services'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            role: ''
        }
        this.Services = new Services()
    }
  

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { username, password, role } = this.state
        this.Services.login(username, password, role)
            .then(theLoggedUser => {
                this.setState({
                    username: '',
                    password: '',
                    role: ''
                })

                //  ARREGLAR ESTOOOOOOO EN APP.JS (setUser)

                // this.props.setUser(theLoggedUser)
                // this.props.history.push('/professional/area')

                console.log(theLoggedUser.data.role)

                // if (this.state.role === 'PROFESSIONAL') {
                //     this.props.history.push('/professional/area')
                // } else {
                //     this.props.history.push('/patient/area')
                // }
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

