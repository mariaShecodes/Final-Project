const express = require('express');
const router = express.Router();

const Register = require('../models/Register');

// MUESTRA TODOS LOS REGISTROS 

router.get('/getAllRegisters', (req, res) => {
    Register.find({ patient: req.user._id })
        .then(myRegisters => res.json( myRegisters ))
        .catch(err => console.log('Error', err))
})

// SACA UN ÚNICO REGISTRO POR SU ID

router.get('/getOneRegister/:id', (req, res) => {
    Register.findById(req.params.id)
        .then(theRegister => res.json(theRegister))
        .catch(err => console.log('Error', err))
})

// CREA UN NUEVO REGISTRO

router.post('/new-register', (req, res) => {
    Register.create(req.body)
        .then(theNewRegister => res.json(theNewRegister))
        .catch(err => console.log('Error', err))
})

module.exports = router