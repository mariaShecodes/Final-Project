import React, { Component } from 'react'
import Services from '../services/patient.services'
import { Link } from 'react-router-dom'

import RegisterCard from './Register-card'


class RegisterList extends Component {

    constructor() {
        super()
        this.state = {registers: []}
        this.services = new Services()
    }

    componentDidMount = () => this.updateList()

    updateList = () => {
        this.services.getRegister()
            .then(response => this.setState({ registers: response.data}))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <div className="container">
                    <h1>Listado de Registros</h1>
                    <div className="row">
  
                        {this.state.registers && this.state.registers.map(register => <RegisterCard key={register._id} {...register} />)}
                    
                    </div>
                    <div>
                        <article>
                            <p>Añadir nuevo registro</p>
                            <hr></hr>
                            <Link className="btn btn-sm btn-dark" to={'/patient/new-register'}>Añadir</Link>  
                        </article>
                    </div>
                </div>
            </>
        )
    }
}

export default RegisterList