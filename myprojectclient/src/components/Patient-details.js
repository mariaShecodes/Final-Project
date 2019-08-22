import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/professional.services'


class PatientDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { patient: {} }
        this.service = new Services()
    }

    componentDidMount() {
        this.service.getOnePatient(this.props.match.params.id)
            .then(response => this.setState({ patient: response.data }))
            .catch(err => console.log('err', err))
    }

    render() {
        return (
            <div className="container">
                <h1>Detalles del Paciente elegido</h1>
                <hr></hr>
                <article>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h1>Detalles de {this.state.patient.username}</h1>
                            <p><strong>Descripción:</strong> {this.state.patient.description}</p>
                            <hr></hr>
                            <Link className="btn btn-big btn-dark" to="/professional/area">Volver</Link>
                        </div>
                        {/* <div className="col-md-4">
                            <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title}></img>
                        </div> */}
                        

                    </div>
                </article>
            </div>
        )
    }
}
export default PatientDetails
