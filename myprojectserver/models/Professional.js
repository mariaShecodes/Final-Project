const mongoose = require('mongoose')
const Schema = mongoose.Schema

const professionalsSchema = new Schema({
    
    username: { type: String, required: true},
    lastName: { type: String },
    email: { type: String },
    password: {type: String, required: true},
    role: { type: String, default: "PROFESSIONAL"},
    job: { type: String },
    speciality: { type: String },
    numberCollegiate: {type: Number },
    examinationRooms: { type: String },
    imageUrl: { type: String}
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Professional = mongoose.model('Professional', professionalsSchema)
module.exports = Professional