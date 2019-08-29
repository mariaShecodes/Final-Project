import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/patient.services'

import '../styles/register-details.css'


class RegisterDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { register: {} }
        this.service = new Services()
    }

    componentDidMount() {
        this.service.getOneRegister(this.props.match.params.id)
            .then(response => this.setState({ register: response.data }))
            .catch(err => console.log('err', err))
    }

    render() {
        return (
            <div className="container">
                <h2 className="details-autoregisters-title">Detalles del Autorregistro</h2>
                <hr></hr>
                <article>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="row first-details-register">
                                <div className="col-md-6">
                                    <h2 className="title-register-detail">{this.state.register.title}</h2>
                                    <p><strong>Fecha: </strong>{this.state.register.dateCreated && this.state.register.dateCreated.slice(0,10)}</p>
                                    <p><strong>Contexto:</strong> {this.state.register.context} </p>
                                </div>
                                <div className="col-md-3">
                                    <img className="image-context" src={this.state.register.imageUrl} alt={this.state.register.title}></img>
                                </div>
                            </div>

                            <hr></hr>
                            <p><strong>¿Qué pensé?</strong></p>
                            <p> {this.state.register.think} </p>
                            <p><strong>¿Cómo me sentí?</strong>  </p>
                            <p>{this.state.register.feel}</p>
                            <p><strong>¿Qué hice?</strong></p>
                            <p>{this.state.register.doing} </p>
                            <p><strong>¿Qué pasó después?</strong></p>
                            <p>{this.state.register.happen}</p>
                            <Link className="btn btn-big btn-info boton-volver-register" to="/patient/area">Volver</Link>
                        </div>
                        
                    </div>
                </article>
            </div>
        )
    }
}
export default RegisterDetails