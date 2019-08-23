import React from 'react'
import { Link } from 'react-router-dom'


const RegisterCard = ({ title, dateCreated, context, think, feel, doing, happen, _id }) => {

    return (
        <div>
            <div className="col-md-4">
                <article>
                    <h2>{title}</h2>
                    <p>Fecha: {dateCreated}</p>
                    <p>¿Cómo me sentía? {feel}</p>
                    <Link className="btn btn-sm btn-dark" to={`/patient/details-register/${_id}`}>Ver detalles</Link>  
                </article>
            </div>
        </div>
    )
}

export default RegisterCard