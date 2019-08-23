import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/patient',
            withCredentials: true
        })
    }

    newRegister = (title, dateCreated, role, context, think, feel, doing, happen, patient) => {
        return this.service.post('/new-register', { title, dateCreated, role, context, think, feel, doing, happen, patient })}
    getRegister = () => this.service.get('/getAllRegisters')
    getOneRegister = id => this.service.get(`/getOneRegister/${id}`)
}