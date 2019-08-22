import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/patient',
            withCredentials: true
        })
    }

    newRegister = (context, patient ) => this.service.post('/new-register', { context, patient })
    getRegister = () => this.service.get('/getAllRegisters')
    // getOnePatient = id => this.profService.get(`/getOnePatient/${id}`)
}