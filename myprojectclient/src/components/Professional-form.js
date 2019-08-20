import React, { Component } from 'react'
import Services  from '../services/auth.services'

class SignupProf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            lastName: '',
            email: '',
            password: '',
            job: '',
            speciality: '',
            numberCollegiate: '',
            examinationRooms: '',
            imageUrl: '' 
        }
        this.service = new Services()
        this.user = {}
    }

    handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        const { username, lastName, email, password, job, speciality, numberCollegiate, examinationRooms } = this.state
        this.service.signup(username, lastName, email, password, job, speciality, numberCollegiate, examinationRooms)
            .then(theNewUser => {
                // Show in console the data response from the backend
                console.log(theNewUser)
                // LIMPIA! Now we set a new state to have empty fields  
                this.setState({
                    username: '',
                    lastName: '',
                    password: ''
                })
                //this.props.setUser(theNewUser)
                // This is the URL where we want to go after signing up
                this.props.history.push('/professional/area')
            })
            .catch(err => console.log(err.response.data.message))
    }

    render() {
        return (
            <>
            <h4>Registro de Profesional</h4>

            <hr></hr>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input-name">Nombre</label>
                    <input name="username" type="text" className="form-control" id="input-username" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-last-name">Apellido</label>
                    <input name="lastName" type="text" className="form-control" id="input-last-name" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-username">email</label>
                    <input name="email" type="email" className="form-control" id="input-email" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Contraseña</label>
                    <input name="password" type="password" className="form-control" id="input-password" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-job">Profesión</label>
                    <input name="job" type="text" className="form-control" id="input-job" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-speciality">Especialidad</label>
                    <input name="speciality" type="text" className="form-control" id="input-speciality" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-collegiate">Número de Colegiado/a</label>
                    <input name="numberCollegiate" type="number" className="form-control" id="input-collegiate" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-rooms">Consulta</label>
                    <input name="examinationRooms" type="text" className="form-control" id="input-roms" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-img">Imagen</label>
                    <input name="imageUrl" type="text" className="form-control" id="input-img" onChange={this.handleChangeInput} />
                </div>

                <button type="submit" className="btn btn-dark btn-sm">Crear</button>
                <button className="btn btn-dark btn-sm" onClick={this.props.closeModal}>Cerrar</button>
            </form>
        </>
           
        )
    }
}
export default SignupProf