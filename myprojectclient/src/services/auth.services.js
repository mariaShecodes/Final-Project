import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/auth`,
            withCredentials: true
        })
    }

    signup = (username, lastName, email, password, role, job, speciality, numberCollegiate, examinationRooms, imageUrl ) => {
        return this.service.post('/signup', { username, lastName, email, password, role, job, speciality, numberCollegiate, examinationRooms, imageUrl })}
    login = (username, password, role)  => this.service.post('/login', { username, password, role })
    logout = () => this.service.post('/logout')
    loggedin = () =>  this.service.get('/loggedin')

    handleUpload = theFile => this.service.post('/upload', theFile)
}
