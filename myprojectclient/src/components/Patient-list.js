import React, { Component } from 'react'
import Services from '../services/professional.services'

import PatientCard from './Patient-card'
import PatientForm from './Patient-form'

import { Modal } from 'react-bootstrap'


class PatientList extends Component {

    constructor() {
        super()
        this.state = {patients: [], showModal: false }
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()
    
    updateList = () => {
        this.services.getPatients()
        .then(response => this.setState({ patients: response.data}))
        .catch(err => console.log(err))
    }

    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })
    
   
    render() {
        
        return (
            <>

                <div className="container">
                    <h3>Listado de Pacientes</h3>
                    <div className="row">
                        {this.state.patients && this.state.patients.map(patient => <PatientCard key={patient._id} {...patient} />)}
                    </div>
                <article>

                    <hr></hr>
                    <p className="add-patient-p">Añadir nuevo paciente</p>
                    <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                       
                        <Modal.Body>
                            <PatientForm closeModal={this.handleModalClose} updatePatientList={this.updateList} />
                        </Modal.Body>

                    </Modal>
                    <button className="btn btn-info btn-big btn-add-patient" onClick={this.handleModalOpen}>Añadir</button>
                </article>
                </div>
            </>
        )
    }
}

export default PatientList

