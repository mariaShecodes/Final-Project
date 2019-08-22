import axios from 'axios'

export default class ProfessionalServices {

    constructor() {

        this.profService = axios.create({
            baseURL: 'http://localhost:5000/professional',
            withCredentials: true
        })
    }

    signupPatient = (username, password, professional) => this.profService.post('/new-patient', { username, password, professional })
    getPatients = () => this.profService.get('/getAllPatients')
    getOnePatient = id => this.profService.get(`getOnePatient/${id}`)


}