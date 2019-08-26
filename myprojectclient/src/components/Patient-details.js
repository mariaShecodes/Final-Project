import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/professional.services'

import RegistersPatient from './Register-patient-details'


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
                <h1>Detalles del Paciente</h1>
                <hr></hr>
                <article>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h2> {this.state.patient.username} {this.state.patient.lastName}</h2>
                            <div className="col-md-4">
                                <img src={this.state.patient.imageUrl} alt="Imagen de perfil"></img>
                            </div>
                            <p>email: {this.state.patient.email}</p>
                            <h3>Tratamiento: {this.state.patient.treatment}</h3>
                            <p><strong>Descripción:</strong> {this.state.patient.description}</p>
                            <hr></hr>
                            <p><strong>Registros</strong></p>

                            <div className="row">
                                {this.state.registers && this.state.registers.map(register => <RegistersPatient key={register._id} {...register} />)}
                            </div>
                            
                        
                           
                            <Link className="btn btn-big btn-info" to="/professional/area">Volver</Link>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
export default PatientDetails
