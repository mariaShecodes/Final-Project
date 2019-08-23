const mongoose = require('mongoose')
const Schema = mongoose.Schema

const registersSchema = new Schema({

    title: {type: String, required: true },
    dateCreated: {type: Date, default: Date.now },
    role: { type: String, default: 'REGISTER'} ,
    context:{ type: String, required: true },
    think: { type: String, required: true  },
    feel: { type: String, 
        enum: ['Feliz', 'Estresado/a', 'Indiferente', 'Preocupado/a', 'Triste', 'Aburrido/a', 'Furioso/a', 'Cansado/a', 'Genial'],
        required: true 
    },
    doing: { type: String, required: true  },
    happen: { type: String, required: true  },
    patient: { type: String },
    selfie: { type: String }

}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" }})

const Register = mongoose.model('Register', registersSchema)
module.exports = Register