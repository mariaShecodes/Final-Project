import React, { Component } from 'react'
import Services  from '../services/professional.services'

import {Link} from 'react-router-dom'



class SignupPatient extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            lastName:'',
            email: '',
            password: '',
            role: "PATIENT",
            professional: JSON.parse(localStorage.getItem('userID')),  // Obtenemos el id del profesional a través de local storage
            treatment: '',
            imageUrl: ''
        }
        this.service = new Services()
    }
    
    handleChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit = e => {
        e.preventDefault()
        const { username, lastName, email, password, role, professional, treatment, imageUrl } = this.state

        this.service.signupPatient( username, lastName, email, password, role, professional, treatment, imageUrl )  //.signupPatient lo coge del Services import
            .then(theNewUser => {
                console.log(theNewUser)

                 // LIMPIA! Now we set a new state to have empty fields  
                 this.setState({
                    username: '',
                    lastName:'',
                    email: '',
                    password: '',
                    role: '',
                    professional: '',
                    treatment: '',
                    imageUrl: ''
                })
                this.props.history.push('/professional/area')
               
           
            })
            .catch(err => console.log({err}))
    }

    handleFileUpload = e => {

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);

        this.service.handleUpload(uploadData)
            .then(response => this.setState({ imageUrl: response.data.secure_url }))
            .catch(err => console.log(err))
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
                    <label htmlFor="input-lastname">Apellido</label>
                    <input name="lastName" type="text" className="form-control" id="input-lastname" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-email">Email</label>
                    <input name="email" type="email" className="form-control" id="input-email" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-password">Contraseña</label>
                    <input name="password" type="password" className="form-control" id="input-password" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <p>Tratamiento</p>
                    <select name="treatment" id="input-treatment" selected={this.state.treatment} onChange={this.handleChangeInput} >
                        <option disabled selected value>Select an option</option>
                        <option value="Depresión">Depresión</option>
                        <option value="Ansiedad" >Ansiedad</option>
                        <option value="Fobia" >Fobia</option>
                        <option value="Hiperactividad" >Hiperactividad</option>
                        <option value="Trast. de la conducta alimentaria" >Trast. de la conducta alimentaria</option>
                        <option value="Trast. del sueño">Trats. del sueño</option>
                    </select> 
                </div>
                <div className="form-group">
                        <label htmlFor="input-img">Imagen</label>
                        <input name="imageUrl" type="file" className="form-control" id="input-img" onChange={this.handleFileUpload} />
                </div>

                <button type="submit" className="btn btn-dark btn-sm">Crear</button>
                <button>
                    <Link to="/professional/area" className="btn btn-dark btn-sm">Cerrar</Link>
                </button>
            </form>
        </>
           
        )
    }
}
export default SignupPatient