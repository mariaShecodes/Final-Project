import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Col, Button } from 'react-bootstrap'

import '../styles/register-card.css'


const RegisterCard = ({ title, dateCreated, context, think, feel, doing, happen, _id }) => {

    return (
        <div className="register-card">
            <article>
                <div className="title-info-register">
                    <h5 className="title-register">{title}</h5>
                    <p className="p-info-register">Fecha: {dateCreated.slice(0,10)}</p>
                </div>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <p className="p-info-register"><strong>¿Dónde estaba? </strong> {context}</p>
                            <p className="p-info-register"><strong>¿Cómo me sentía? </strong> {feel}</p>
                        </div>
                        <div className="col-md-4">
                            <Link className="btn btn-sm btn-outline-info boton-details" to={`/patient/details-register/${_id}`}>Ver detalles</Link>    
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default RegisterCard