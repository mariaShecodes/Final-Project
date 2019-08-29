import React from 'react'

import '../styles/register-patient-details.css'



const RegistersPatientDetails = ({ title, dateCreated, context, imageUrl, think, feel, doing, happen, _id }) => {

    return (
        <div>
            <div className="autoregisters-details">
                <article>
                    <p className="title-autorregister">{title}</p>
                    <hr></hr>
                    <img src={imageUrl} alt="Imagen del contexto" className="photo-context"></img>
                    <p className="title-context-image">Imagen de la ubicación</p>
                    <p className="p-info"><strong>Fecha:</strong> {dateCreated}</p>
                    <p className="p-info"><strong>¿Dónde se encontraba?</strong> {context}</p>
                    <p className="p-info"><strong>¿Qué pensaba?</strong> {think}</p>
                    <p className="p-info"><strong>¿Cómo se sentía?</strong> {feel}</p>
                    <p className="p-info"><strong>¿Qué hizo?</strong> {doing}</p>
                    <p className="p-info"><strong>¿Qué ocurrió después?</strong> {happen}</p> 
                </article>
            </div>
        </div>
    )
}

export default RegistersPatientDetails