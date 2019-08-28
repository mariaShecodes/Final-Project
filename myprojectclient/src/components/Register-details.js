import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Services from '../services/patient.services'


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
                            <h1>Detalles de {this.state.register.title}</h1>
                            <p><strong>Contexto:{this.state.register.context} </strong></p>
                            <p>{this.state.register.dateCreated}</p>
                            <hr></hr>
                            <p><strong>¿Qué pensé?</strong> {this.state.register.think} </p>
                            <p><strong>¿Cómo me sentí?</strong> {this.state.register.feel} </p>
                            <p><strong>¿Qué hice?</strong> {this.state.register.doing} </p>
                            <p><strong>¿Qué pasó después?</strong> {this.state.register.happen} </p>
                            <Link className="btn btn-big btn-dark" to="/patient/area">Volver</Link>
                        </div>
                        <div className="col-md-4">
                            <img src={this.state.register.imageUrl} alt={this.state.register.title}></img>
                        </div>
                        
                    </div>
                </article>
            </div>
        )
    }
}
export default RegisterDetails