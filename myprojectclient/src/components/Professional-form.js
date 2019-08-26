import React, { Component } from 'react'
import Services  from '../services/auth.services'

// import { Button, Form, Col } from 'react-bootstrap'

class SignupProf extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            lastName: '',
            email: '',
            password: '',
            role: 'PROFESSIONAL',
            job: '',
            speciality: '',
            numberCollegiate: '',
            examinationRooms: '',
            imageUrl: ''
        }
        this.service = new Services()
        this.user = {}
    }

    handleChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { username, lastName, email, password, role, job, speciality, numberCollegiate, examinationRooms, imageUrl } = this.state
        this.service.signup(username, lastName, email, password, role, job, speciality, numberCollegiate, examinationRooms, imageUrl )
            .then(theNewUser => {
                console.log(theNewUser)

                // LIMPIA! Now we set a new state to have empty fields  
                this.setState({
                    username: '',
                    lastName: '',
                    emial: '',
                    password: '',
                    role:'',
                    job:'',
                    speciality: '', 
                    numberCollegiate: '', 
                    examinationRooms: '', 
                    imageUrl: ''
                })

                this.props.setUser(theNewUser)
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
            <h4>Registro de Profesional</h4>

            <hr></hr>

            <form onSubmit={this.handleSubmit}>

            {/* <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="username" type="text" className="form-control" id="input-username" onChange={this.handleChangeInput} placeholder="Nombre" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control name="lastName" type="text" className="form-control" id="input-last-name" onChange={this.handleChangeInput} placeholder="Apellido" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" className="form-control" id="input-email" onChange={this.handleChangeInput} placeholder="hola@thinkapp.com" />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="password" type="password" className="form-control" id="input-password" onChange={this.handleChangeInput} placeholder="Password" />
            </Form.Group> */}

                 <div className="form-group">
                    <label htmlFor="input-username">Nombre</label>
                     <input name="username" type="text" className="form-control" id="input-username" onChange={this.handleChangeInput} />
                 </div>

                 <div className="form-group">
                     <label htmlFor="input-lastname">Apellido</label>
                     <input name="lastName" type="text" className="form-control" id="input-lastname" onChange={this.handleChangeInput} />               </div>
               
                <div className="form-group">
                    <label htmlFor="input-email">Email</label>
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
                    <input name="examinationRooms" type="text" className="form-control" id="input-rooms" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-img">Imagen</label>
                    <input name="imageUrl" type="file" className="form-control" id="input-img" onChange={this.handleFileUpload}  />
                </div>

                <button type="submit" className="btn btn-dark btn-sm">Crear</button>
                <button className="btn btn-dark btn-sm" onClick={this.props.closeModal}>Cerrar</button>
            </form>
        </>
           
        )
    }
}
export default SignupProf