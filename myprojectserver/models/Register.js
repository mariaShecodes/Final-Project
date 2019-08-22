const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registersSchema = new Schema({

    dateCreated: {type: Date, default: Date.now },
    role: { type: String, default: 'REGISTER'} ,
    context:{ type: String },
    think: { type: String },
    feel: { type: String, 
        enum: ['happy', 'stress', 'indifferent', 'worry', 'sad', 'boring', 'furious', 'tired', 'brilliant']
    },
    do: { type: String },
    happen: { type: String },
    patient: { type: String },
    selfie: { type: String }

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" }})

const Register = mongoose.model('Register', registersSchema)
module.exports = Register