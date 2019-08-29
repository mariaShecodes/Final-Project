import React, { Component } from 'react'
import Services from '../services/patient.services'

import RegisterCard from './Register-card'
import RegisterForm from './Register-form'

import { Modal } from 'react-bootstrap'


class RegisterList extends Component {

    constructor() {
        super()
        this.state = {registers: [], showModal: false}
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getRegister()
            .then(response => this.setState({ registers: response.data}))
            .catch(err => console.log(err))
    }

    handleModalOpen = () => this.setState({ showModal: true })
    handleModalClose = () => this.setState({ showModal: false })



    render() {

        return (
            <>
               <div className="container">
                    <h3>Listado de Autorregistros</h3>
                    <div className="row">
                        { this.state.registers.map(register => <RegisterCard key={register._id} {...register} />)}
                    </div>

                <article>
                    <hr></hr>
                    <p className="add-autorregister-p">Añadir nuevo autorregistro</p>
                    <Modal show={this.state.showModal} onHide={this.handleModalClose}>
                       
                        <Modal.Body>
                            <RegisterForm closeModal={this.handleModalClose} updateRegisterList={this.updateList} />
                        </Modal.Body>

                    </Modal>
                    <button className="btn btn-info btn-big btn-add-patient" onClick={this.handleModalOpen}>Añadir</button>
                </article>
                </div>     
            </>
        )
    }
}

export default RegisterList