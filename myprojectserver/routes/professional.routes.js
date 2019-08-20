const express = require('express');
const router = express.Router();

// const passport = require('passport');
const bcrypt = require('bcryptjs');

const Patient = require('../models/Patients');

// ALL PATIENT

router.get('/getAllPatients', (req, res) => {
    Patient.find()
        .then(allPatients => res.json(allPatients))
        .catch(err => console.log('Error', err))
})

// router.get('/patient/:id', (req, res) => {
//     Patient.findById(req.params.id)
//         .then(thePatient => res.json(thePatient))
//         .catch(err => console.log('Error', err))
// })


// NEW PATIENT
router.post('/new-patient', (req, res, next) => {
    const { username, password } = req.body

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


        // SUPER IMPORTANTE!!!! ES LO QUE CREA EL NUEVO USER/PROFESSIONAL: pasar todas las propiedades

        const aNewPatient = new Patient ({   
            username: username,
            password: hashPass,
        });

        aNewPatient.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }

            // Automatically log in user after sign up
            // .login() here is actually predefined passport method
            req.login(aNewPatient, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }

                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewPatient);
            });
        });
    });
});


module.exports = router