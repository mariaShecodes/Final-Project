import React, { Component } from 'react'
import Services from '../services/professional.services'
import { Link } from 'react-router-dom'

import PatientCard from './Patient-card'
import PatientForm from './Patient-form'


class PatientList extends Component {

    constructor() {
        super()
        this.state = {patients: []}
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getPatients()
        .then(response => this.setState({ patients: response.data}))
        .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Listado de Pacientes</h1>
                    <div className="row">
                        {this.state.patients && this.state.patients.map(patient => <PatientCard key={patient._id} {...patient} />)}
                    </div>
                    <div>
                        <article>
                            <p>Añadir nuevo paciente</p>
                            <hr></hr>
                            <Link className="btn btn-sm btn-dark" to={'/professional/new-patient'}>Añadir</Link>  
                        </article>
                    </div>
                </div>
            </>
        )
    }
}

export default PatientList

