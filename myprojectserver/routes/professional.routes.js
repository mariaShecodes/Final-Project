const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

const Patient = require('../models/Patients');



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

// ELIMINA UN PACIENTE

// router.post("/deletePatient/:id", (req, res, next) => {

//     Patient.findByIdAndRemove(req.params.id)
//       .then(() => console.log('Paciente eliminado'))
//       .catch(function(err) {
//         console.log("Hubo un error:", err);
//       })
// });



// NEW PATIENT
router.post('/new-patient', (req, res, next) => {
    const { username, password, professional } = req.body

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
            password: hashPass,
            professional: professional
        });
        console.log(aNewPatient)
        
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