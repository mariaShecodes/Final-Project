import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/professional.services'

import RegistersPatient from './Register-patient-details'

import '../styles/patient-details.css'

class PatientDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            patient: {}, 
            registers: []
        }
        this.service = new Services()
    }

    componentDidMount() {
        this.service.getOnePatient(this.props.match.params.id)
        .then(response => {
            console.log(response.data)
            console.log(response.data.registersPatient)
            console.log(response.data.thePatient.username)

           return this.setState({ patient: response.data.thePatient, registers: response.data.registersPatient })
        })
        .catch(err => console.log('err', err))
    }

    render() {
        return (
            <div className="container">
                <div className="encabezado">
                    <h2 className="details-patients-title">Detalles del Paciente</h2>
                    <div className="btn-volver">
                        <Link className="link-simple link" to="/professional/area">Volver</Link>                       
                    </div>
                </div>
                <hr></hr>
                <article>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3">
                            <h2 className="name-patient"> {this.state.patient.username} {this.state.patient.lastName}</h2>
                            <p className="email">email: {this.state.patient.email}</p>
                            <p className="info-patient"><strong>Fecha de nacimiento:</strong> </p>
                            <p className="info-patient"><strong>Tratamiento:</strong> {this.state.patient.treatment}</p>
                            <p className="info-patient"><strong>Descripción:</strong> {this.state.patient.description}</p>
                        </div>
                        <div className="col-md-6">
                            <img className="image-patient" src={this.state.patient.imageUrl} alt="Imagen de perfil"></img>
                        </div>
                    </div>

                    <hr></hr>
                    <h4>Autorregistros</h4>

                    <div className="row autoregisterText">
                        {this.state.registers && this.state.registers.map(register => <RegistersPatient key={register._id} {...register} />)}
                    </div>
                </article>
                <Link className="btn btn-big btn-info boton-volver-patient" to="/professional/area">Volver</Link>
            </div>
        )
    }
}
export default PatientDetails
