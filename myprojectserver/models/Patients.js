const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientsSchema = new Schema({
    username: { type: String, required: true },
    lastName: { type: String },
    email: {type: String },
    password: {type: String, required: true},
    role: { type: String, enum: ["PATIENT"], default: "PATIENT"},
    // treatment: {
    //   type: String,
    //   enum: ["DEPRESSION", "ANXIETY", "PHOBIA", "HYPERACTIVITY", "EATING DISORDER", "SLEEP DISORDER"],
    //   default: ["DEPRESSION"]
    // },
    imageUrl: { type: String }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" }})

const Patient = mongoose.model('Patient', patientsSchema)
module.exports = Patient