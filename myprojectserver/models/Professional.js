const mongoose = require('mongoose')
const Schema = mongoose.Schema

const professionalsSchema = new Schema({
    
    username: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true },
    password: {type: String, required: true},
    role: { type: String, enum: ["PROFESSIONAL"], default: "PROFESSIONAL"},
    job: { type: String, required: true },
    speciality: { type: String, required: true },
    numberCollegiate: {type: Number, required: true },
    examinationRooms: { type: String, required: true },
    imageUrl: { type: String}
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const Professional = mongoose.model('Professional', professionalsSchema)
module.exports = Professional