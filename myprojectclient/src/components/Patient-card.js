import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/patient-cards.css'


const PatientCard = ({ username, lastName, imageUrl,email, treatment, _id }) => {

    return (
        <div className="patient-card">
            <img src={imageUrl} alt="Foto Paciente" className="photo-patient"/>
            <h2>{username} {lastName}</h2>
            <p>{email}</p>
            <p>Tratamiento: {treatment}</p>
            <hr></hr>
            <Link className="btn btn-sm btn-outline-info btn-details" to={`/professional/details-patient/${_id}`}>Ver detalles</Link>  
        </div>
    )
}

export default PatientCard