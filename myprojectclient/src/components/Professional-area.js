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
                <h2 className="title-window">Area Profesional</h2>
                <hr></hr>
                <PatientsList />
            </div>
        )
    }
}
export default ProfArea