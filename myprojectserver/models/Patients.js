const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientsSchema = new Schema({
    username: { type: String, maxlength:15, required: true },
    lastName: { type: String, maxlength:15, required: true },
    email: {type: String, requerid: true },
    password: {type: String, required: true},
    role: { type: String, default: "PATIENT"},
    professional: { type: String},
    //professional: { type: Schema.Types.ObjectId, ref: "Professional" },
    treatment: {
      type: String,
      enum: ["Depresión", "Ansiedad", "Fobia", "Hiperactividad", "Trast. de la conducta alimentaria", "Trast. del sueño"],
      required: true
    },
    imageUrl: { type: String }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" }})

const Patient = mongoose.model('Patient', patientsSchema)
module.exports = Patient