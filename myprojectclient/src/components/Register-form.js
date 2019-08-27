import React, { Component } from 'react'
import Services  from '../services/patient.services'

import {Link} from 'react-router-dom'


class NewRegister extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            dateCreated: '',
            role: 'REGISTER',
            context: '',
            imageUrl: '',
            think: '',
            feel: '',
            doing: '',
            happen: '',
            patient: JSON.parse(localStorage.getItem('userID')),  // Obtenemos el id del profesional a través de local storage
        }
        this.service = new Services()
    }
    
    handleChangeInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { title, dateCreated, role, context, imageUrl, think, feel, doing, happen, patient } = this.state

        this.service.newRegister( title, dateCreated, role, context, imageUrl, think, feel, doing, happen, patient )  //.newRegister lo coge del Services import
            .then(theNewRegister => {
                console.log(theNewRegister)

                // LIMPIA! Now we set a new state to have empty fields  
                this.setState({
                    title: '',
                    dateCreated: '',
                    role: '',
                    context: '',
                    imageUrl: '',
                    think: '',
                    feel: '',
                    doing: '',
                    happen: '',
                    patient: ''
                    
                })
                this.props.history.push('/patient/area')
            })
            .catch(err => console.log({err}))
    }

    handleFileUpload = e => {

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);

        this.service.handleUpload(uploadData)
            .then(response => this.setState({ imageUrl: response.data.secure_url }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
            <h4>Añadir nuevo registro</h4>

            <hr></hr>

            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input-title">Título</label>
                    <input name="title" type="text" className="form-control" id="input-title" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-date">Fecha</label>
                    <input name="dateCreated" type="date" className="form-control" id="input-date" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-context">¿Dónde estoy?</label>
                    <input name="context" type="text" className="form-control" id="input-context" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                        <label htmlFor="input-img">Imagen del lugar</label>
                        <input name="imageUrl" type="file" className="form-control" id="input-img" onChange={this.handleFileUpload} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-think">¿Qué pienso?</label>
                    <input name="think" type="text-area" className="form-control" id="input-think" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                     <p>¿Cómo me siento?</p>
                     <select name="feel" id="input-feel" selected={this.state.feel} onChange={this.handleChangeInput} >
                         <option disabled selected value>Select an option</option>
                         <option value="Feliz">Feliz</option>
                         <option value="Estresado/a" >Estresado/a</option>
                         <option value="Indiferente" >Indiferente</option>
                         <option value="Preocupado/a" >Preocupado/a</option>
                         <option value="Triste" >Triste</option>
                         <option value="Aburrido/a">Aburrido/a</option>
                         <option value="Furioso/a">Furioso/a</option>
                         <option value="Cansado/a">Cansado/a</option>
                         <option value="Genial">Genial</option>
                    </select> 
                </div>
                <div className="form-group">
                    <label htmlFor="input-doing">¿Qué hago?</label>
                    <input name="doing" type="text" className="form-control" id="input-doing" onChange={this.handleChangeInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="input-happen">¿Qué pasa después?</label>
                    <input name="happen" type="text" className="form-control" id="input-happen" onChange={this.handleChangeInput} />
                </div>
                <button type="submit" className="btn btn-dark btn-sm">Crear</button>
                <button>
                    <Link to="/patient/area" className="btn btn-dark btn-sm">Cerrar</Link>
                </button>
            </form>
        </>
           
        )
    }
}
export default NewRegister