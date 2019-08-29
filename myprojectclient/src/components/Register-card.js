import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/register-card.css'


const RegisterCard = ({ title, dateCreated, context, think, feel, doing, happen, _id }) => {

    return (
        <div className="register-card">
            <article>
                <h2 className="title-register">{title}</h2>
                <hr></hr>
                <p className="p-info-register"><strong>Fecha:</strong> {dateCreated}</p>
                <p className="p-info-register"><strong>¿Dónde estaba?</strong> {context}</p>
                <p className="p-info-register"><strong>¿Cómo me sentía?</strong> {feel}</p>
                <Link className="btn btn-sm btn-outline-info boton-details" to={`/patient/details-register/${_id}`}>Ver detalles</Link>  
            </article>
        </div>
    )
}

export default RegisterCard