import React from 'react'
// import { Link } from 'react-router-dom'


const RegisterCard = ({ context, _id }) => {

    return (
        <div>
            <div className="col-md-4">
                <article>
                    <h2>Contexto {context}</h2>
                    <h3>Emocion</h3>
                    <h4>Hacer</h4>
                    <p>Description</p>
                    {/* <Link className="btn btn-sm btn-dark" to={`/patient/details-register/${_id}`}>Ver detalles</Link>   */}
                </article>
            </div>
        </div>
    )
}

export default RegisterCard