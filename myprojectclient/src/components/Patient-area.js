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
                <h1 className="title-window">Area Personal</h1>
                <RegisterList />
            </div>
        )
    }
}
export default PatientArea