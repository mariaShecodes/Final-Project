import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/professional',
            withCredentials: true
        })
    }

    signupPatient = (username, lastName, email, password, role, professional, treatment ) => {
        return this.service.post('/new-patient', { username, lastName, email, password, role, professional, treatment}) }
    getPatients = () => this.service.get('/getAllPatients')
    getOnePatient = id => this.service.get(`/getOnePatient/${id}`)
}