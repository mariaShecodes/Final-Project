import React, { Component } from 'react'
import Services  from '../services/professional.services'


class SignupPatient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.service = new Services()
        // this.user = {}
    }

    handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        const { username, password } = this.state
        this.service.signupPatient(username, password)  //.signupPatient lo coge del Services import
            .then(theNewUser => {
                console.log(theNewUser)
                // LIMPIA! Now we set a new state to have empty fields  
                this.setState({
                    username: '',
                    password: ''
                })
                // this.props.setUser(theNewUser)
                this.props.history.push('/professional/area')
            })
            .catch(err => console.log(err.response.data.message))
    }

    render() {
        return (
            <>
            <h4>Añadir nuevo paciente</h4>

            <hr></hr>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input-name">Nombre</label>
                    <input name="username" type="text" className="form-control" id="input-username" onChange={this.handleChangeInput} />
                </div>
                
                <div className="form-group">
                    <label htmlFor="input-password">Contraseña</label>
                    <input name="password" type="password" className="form-control" id="input-password" onChange={this.handleChangeInput} />
                </div>
                <button type="submit" className="btn btn-dark btn-sm">Crear</button>
                <button className="btn btn-dark btn-sm" onClick={this.props.closeModal}>Cerrar</button>
            </form>
        </>
           
        )
    }
}
export default SignupPatient