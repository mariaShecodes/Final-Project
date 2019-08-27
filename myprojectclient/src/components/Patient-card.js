import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/patient-cards.css'


const PatientCard = ({ username, lastName, imageUrl, treatment, _id }) => {

    return (
        <div>
            <div className="col">
                <article>
                    <img src={imageUrl}alt="Foto Paciente" className="photo-patient"/>
                    <h2>{username} {lastName}</h2>
                    <p>Tratamiento: {treatment}</p>
                    <hr></hr>
                    <Link className="btn btn-sm btn-dark" to={`/professional/details-patient/${_id}`}>Ver detalles</Link>  
                </article>
            </div>
        </div>
    )
}

export default PatientCard