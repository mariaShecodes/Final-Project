const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientsSchema = new Schema({
    username: { type: String, maxlength:15, required: true },
    lastName: { type: String, maxlength:15 },
    email: {type: String },
    password: {type: String, required: true},
    role: { type: String, enum: ["PATIENT"], default: "PATIENT"},
    professional: { type: String},
    //professional: { type: Schema.Types.ObjectId, ref: "Professional" },
    // treatment: {
    //   type: String,
    //   enum: ["DEPRESSION", "ANXIETY", "PHOBIA", "HYPERACTIVITY", "EATING DISORDER", "SLEEP DISORDER"],
    //   default: ["DEPRESSION"]
    // },
    imageUrl: { type: String }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" }})

const Patient = mongoose.model('Patient', patientsSchema)
module.exports = Patient