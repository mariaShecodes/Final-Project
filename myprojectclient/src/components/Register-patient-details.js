import React from 'react'

import '../styles/register-patient-details.css'



const RegistersPatientDetails = ({ title, dateCreated, context, imageUrl, think, feel, doing, happen, _id }) => {

    return (
        <div>
            <div className="container autoregisters-details">
                <div className="row">
                    <div className="col-md-8">
                        <p className="title-autorregister">{title}</p>
                    </div>
                    <div className="col-md-4">
                        <p className="p-date">Fecha: {dateCreated.slice(0,10)}</p>
                    </div>
                </div>
                <hr className="hr-separador"></hr>

                <div className="row">
                    <div className="col-md-4">
                        <img src={imageUrl} alt="Imagen del contexto" className="photo-context"></img>
                        <p className="title-context-image">Imagen de la ubicación</p>
                    </div>
                    <div className="col-md-8 caja-info-registro">
                        <p className="p-info"><strong>¿Dónde se encontraba?</strong> {context}</p>
                        <p className="p-info"><strong>¿Qué pensaba?</strong> {think}</p>
                        <p className="p-info"><strong>¿Cómo se sentía?</strong> {feel}</p>
                        <p className="p-info"><strong>¿Qué hizo?</strong> {doing}</p>
                        <p className="p-info"><strong>¿Qué ocurrió después?</strong> {happen}</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistersPatientDetails