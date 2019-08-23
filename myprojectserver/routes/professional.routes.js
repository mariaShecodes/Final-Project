const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const uploader = require('../configs/cloudinary.config');

const Patient = require('../models/Patients');

//CLOUDINARY

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }

    res.json({ secure_url: req.file.secure_url });
})


// ALL PATIENT POR EL ID DEL PROFESIONAL QUE LOS HA CREADO

router.get('/getAllPatients', (req, res) => {
    Patient.find({ professional: req.user._id })
        .then(myPatients => res.json( myPatients ))
        .catch(err => console.log('Error', err))
})


// SACA UN ÚNICO PACIENTE POR SU ID

router.get('/getOnePatient/:id', (req, res) => {
    Patient.findById(req.params.id)
        .then(thePatient => res.json(thePatient))
        .catch(err => console.log('Error', err))
})



// NEW PATIENT
router.post('/new-patient', (req, res, next) => {
    const { username, lastName, email, password, role, professional, treatment, imageUrl } = req.body

    if (!username || !password) {
        res.status(400).json({ message: 'Provide username and password' });
        return;
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
        return;
    }

    Patient.findOne({ username }, (err, foundUser) => {

        if (err) {
            res.status(500).json({ message: "Username check went bad." });
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Username taken. Choose another one.' });
            return;
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);

       
        // SUPER IMPORTANTE!!!! ES LO QUE CREA EL NUEVO PACIENTE: pasar todas las propiedades
        const aNewPatient = new Patient ({   
            username: username,
            lastName: lastName,
            email: email,
            password: hashPass,
            role: role,
            professional: professional,
            treatment: treatment,
            imageUrl: imageUrl

        });
        console.log(aNewPatient)
        
        aNewPatient.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }
            res.status(200).json(aNewPatient)
        });
    });
});

module.exports = router