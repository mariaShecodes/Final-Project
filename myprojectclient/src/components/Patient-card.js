import React from 'react'
import { Link } from 'react-router-dom'


const PatientCard = ({ username, _id }) => {

    return (
        <div>
            <div className="col-md-4">
                <article>
                    <img src='#'alt="Foto Paciente" />
                    <h2>{username}</h2>
                    <h3>Last Name</h3>
                    <h4>Tipo de Tto</h4>
                    <hr></hr>
                    <p>Description</p>
                    <Link className="btn btn-sm btn-dark" to={`/patients/${_id}`}>Ver detalles</Link>  
                </article>
            </div>
        </div>
    )
}

export default PatientCard