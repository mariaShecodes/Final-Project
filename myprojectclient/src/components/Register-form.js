import React, { Component } from 'react'
import Services  from '../services/patient.services'


class NewRegister extends Component {

    constructor(props) {
        super(props)
        this.state = {
            context: '',
            patient: JSON.parse(localStorage.getItem('userID')),  // Obtenemos el id del profesional a través de local storage
        }
        this.service = new Services()
    }
    
    handleChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSubmit = e => {
        e.preventDefault()
        const { context, patient } = this.state

        this.service.newRegister( context, patient )  //.newRegister lo coge del Services import
            .then(theNewRegister => {
                console.log(theNewRegister)

                // LIMPIA! Now we set a new state to have empty fields  
                this.setState({
                    context: '',
                    patient: ''
                    
                })
                this.props.history.push('/patient/area')
            })
            .catch(err => console.log({err}))
    }

    render() {

        return (
            <>
            <h4>Añadir nuevo registro</h4>

            <hr></hr>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input-context">Context</label>
                    <input name="context" type="text" className="form-control" id="input-context" onChange={this.handleChangeInput} />
                </div>
                
                {/* <div className="form-group">
                    <label htmlFor="input-password">Contraseña</label>
                    <input name="password" type="password" className="form-control" id="input-password" onChange={this.handleChangeInput} />
                </div> */}
              
                <button type="submit" className="btn btn-dark btn-sm">Crear</button>
                <button className="btn btn-dark btn-sm" onClick={this.props.closeModal}>Cerrar</button>
            </form>
        </>
           
        )
    }
}
export default NewRegister