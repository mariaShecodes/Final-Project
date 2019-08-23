import React from 'react'
import { Link } from 'react-router-dom'


const PatientCard = ({ username, lastName, treatment, _id }) => {

    return (
        <div>
            <div className="col-md-4">
                <article>
                    <img src='#'alt="Foto Paciente" />
                    <h2>{username} </h2>
                    <h3>{lastName}</h3>
                    <p>Tratamiento: </p>
                    <p>{treatment}</p>
                    <hr></hr>
                    <Link className="btn btn-sm btn-dark" to={`/professional/details-patient/${_id}`}>Ver detalles</Link>  
                </article>
            </div>
        </div>
    )
}

export default PatientCard