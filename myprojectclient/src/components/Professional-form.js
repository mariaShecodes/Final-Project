import React, { Component } from 'react'
import Services  from '../services/auth.services'

import {Link} from 'react-router-dom'
import { Form, Col, Button } from 'react-bootstrap'

import '../styles/profesional-form.css'

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
            <div className="background-form">
            <h4>Registro de Profesional</h4>

            <hr></hr>

            <form onSubmit={this.handleSubmit} className="form-professional">

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridUsername">
                        <Form.Label className="title">Nombre</Form.Label>
                        <Form.Control name="username" type="text" className="form-control" id="input-username" onChange={this.handleChangeInput} placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLasProfessional">
                        <Form.Label className="title">Profesión</Form.Label>
                        <Form.Control name="job" type="text" className="form-control" id="input-job" onChange={this.handleChangeInput} placeholder="Psicólogo/a" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label className="lastname title">Apellido</Form.Label>
                        <Form.Control name="lastName" type="text" className="form-control lastname" id="input-last-name" onChange={this.handleChangeInput} placeholder="Apellido" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLasSpeciality">
                        <Form.Label className="title">Especialidad</Form.Label>
                        <Form.Control name="speciality" type="text" className="form-control" id="input-speciality" onChange={this.handleChangeInput} placeholder="Neurología" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridLasNumber">
                        <Form.Label className="title">Número de Colegiado/a</Form.Label>
                        <Form.Control name="numberCollegiate" type="number" className="form-control" id="input-collegiate" onChange={this.handleChangeInput} placeholder="12345" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridRooms">
                        <Form.Label className="title">Consulta</Form.Label>
                        <Form.Control name="examinationRooms" type="text" className="form-control" id="input-rooms" onChange={this.handleChangeInput} placeholder="Neurosalud" />
                    </Form.Group>
                </Form.Row>


                <Form.Group as={Col} controlId="formGridImage" className="image">
                    <Form.Label className="label-image title">Imagen</Form.Label>
                    <Form.Control name="imageUrl" type="file" className="form-control box-image" id="input-img" onChange={this.handleFileUpload} />
                </Form.Group>

                <hr></hr>

                <Form.Group controlId="formGridEmail" className="center">
                    <Form.Label className="title">Email</Form.Label>
                    <Form.Control name="email" type="email" className="form-control" id="input-email" onChange={this.handleChangeInput} placeholder="hola@thinkapp.com" />
                </Form.Group>
        
                <Form.Group controlId="formGridPassword" className="center">
                    <Form.Label className="title">Contraseña</Form.Label>
                    <Form.Control name="password" type="password" className="form-control" id="input-password" onChange={this.handleChangeInput} placeholder="Password" />
                </Form.Group>

                <div className='btn-click'>
                    <Button type="submit" variant="outline-info" size="lg" className="btn">Crear</Button>
                    <Link to="/" className="btn btn-outline-info btn-lg">Cerrar</Link>
                </div>
            </form>
        </div>
           
           )
        }
    }
    export default SignupProf