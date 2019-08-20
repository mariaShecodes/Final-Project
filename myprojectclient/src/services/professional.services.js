import axios from 'axios'

export default class ProfessionalServices {

    constructor() {

        this.profService = axios.create({
            baseURL: 'http://localhost:5000/professional',
            withCredentials: true
        })
    }

    signupPatient = (username, password) => this.profService.post('/new-patient', { username, password })
    getPatients = () => this.profService.get('/getAllPatients')


}