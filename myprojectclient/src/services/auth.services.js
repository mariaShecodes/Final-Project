import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: 'http://localhost:5000/auth',
            withCredentials: true
        })
    }

    signup = (username, lastName, email, password, job, speciality, numberCollegiate, examinationRooms) => {
        return this.service.post('/signup', { username, lastName, email, password, job, speciality, numberCollegiate, examinationRooms })}
    login = (username, password, role) => this.service.post('/login', { username, password, role })
    logout = () => this.service.post('/logout')
    loggedin = () => this.service.get('/loggedin')
}
