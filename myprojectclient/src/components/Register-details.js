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
                <h2>Detalles del Registro</h2>
                <hr></hr>
                <article>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="row first-details-register">
                                <div className="col-md-6">
                                    <h2 className="title-register-detail">{this.state.register.title}</h2>
                                    <p>{this.state.register.dateCreated}</p>
                                    <p><strong>Contexto: {this.state.register.context} </strong></p>
                                </div>
                                <div className="col-md-3">
                                    <img className="image-context" src={this.state.register.imageUrl} alt={this.state.register.title}></img>
                                </div>
                            </div>

                            <hr></hr>
                            <p><strong>¿Qué pensé?</strong> {this.state.register.think} </p>
                            <p><strong>¿Cómo me sentí?</strong> {this.state.register.feel} </p>
                            <p><strong>¿Qué hice?</strong> {this.state.register.doing} </p>
                            <p><strong>¿Qué pasó después?</strong> {this.state.register.happen} </p>
                            <Link className="btn btn-big btn-info boton-volver-register" to="/patient/area">Volver</Link>
                        </div>
                        
                    </div>
                </article>
            </div>
        )
    }
}
export default RegisterDetails