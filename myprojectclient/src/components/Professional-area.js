import React, { Component } from 'react'
import PatientsList from './Patient-list'

class ProfArea extends Component {

    constructor() {
        super()
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <h1>Estás en tu area privada de profesional</h1>
                <PatientsList />
            </div>
        )
    }
}
export default ProfArea