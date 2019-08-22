import React, { Component } from 'react'
import RegisterList from './Register-list'


class PatientArea extends Component {

    constructor() {
        super()
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <h1>Estás en tu area privada de paciente</h1>
                <RegisterList />
            </div>
        )
    }
}
export default PatientArea