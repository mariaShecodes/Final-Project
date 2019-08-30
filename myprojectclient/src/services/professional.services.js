import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/professional`,
            withCredentials: true
        })
    }

    signupPatient = (username, lastName, email, password, birthDate, description, role, professional, treatment, imageUrl ) => {
        return this.service.post('/new-patient', { username, lastName, email, password, birthDate, description, role, professional, treatment, imageUrl}) }
    getPatients = () => this.service.get('/getAllPatients')
    getOnePatient = id => this.service.get(`/getOnePatient/${id}`)
    handleUpload = theFile => this.service.post('/upload', theFile)
}