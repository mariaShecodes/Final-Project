import React from 'react'



const RegistersPatientDetails = ({ title, dateCreated, context, imageUrl, think, feel, doing, happen, _id }) => {

    return (
        <div>
            <div>
                <article>
                    <h2>{title}</h2>
                    <p><strong>Fecha:</strong> {dateCreated}</p>
                    <p><strong>¿Dónde se encontraba?</strong> {context}</p>
                    <p>Imagen de la ubicación: <img src={imageUrl} alt="Imagen del contexto"></img></p>
                    <p><strong>¿Qué pensaba?</strong> {think}</p>
                    <p><strong>¿Cómo se sentía?</strong> {feel}</p>
                    <p><strong>¿Qué hizo?</strong> {doing}</p>
                    <p><strong>¿Qué ocurrió después?</strong> {happen}</p> 
                    <hr></hr>
                </article>
            </div>
        </div>
    )
}

export default RegistersPatientDetails