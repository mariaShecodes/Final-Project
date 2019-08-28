import axios from 'axios'

export default class Services {

    constructor() {

        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/patient`,
            withCredentials: true
        })
    }

    newRegister = (title, dateCreated, role, context, imageUrl, think, feel, doing, happen, patient ) => {
        return this.service.post('/new-register', { title, dateCreated, role, context, imageUrl, think, feel, doing, happen, patient })}
    getRegister = () => this.service.get('/getAllRegisters')
    getOneRegister = id => this.service.get(`/getOneRegister/${id}`)
    handleUpload = theFile => this.service.post('/upload', theFile)

    handleAudioUpload = uploadData => this.service.post('upload', uploadData, { headers: {'Content-Type': 'multipart/form-data' }, withCredentials: true })
            .then(res => {
                console.log("AUDIO FILE UPLOADED");
                console.log(res);
                return res.data;
            })
            .catch(err => console.log(err));
    
}