const express = require('express');
const authRoutes = express.Router();

const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcryptjs');

const Professional = require('../models/Professional');
const Patient = require('../models/Patients')

const uploader = require('../configs/cloudinary.config');

//CLOUDINARY
authRoutes.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }
    res.json({ secure_url: req.file.secure_url });
})


// SIGNUP DE PROFESIONALES
authRoutes.post('/signup', (req, res, next) => {
    const { username, lastName, email, password, role, job, speciality, numberCollegiate, examinationRooms, imageUrl } = req.body
    

    if (!username || !password) {
        console.log(password, "consolelog raro")
        res.status(400).json({ message: 'Provide username and password' });
        return;
    }

    if (password.length < 2) {
        res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
        return;
    }

    Professional.findOne({ username }, (err, foundUser) => {

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


        // SUPER IMPORTANTE!!!! ES LO QUE CREA EL NUEVO PROFESSIONAL: pasar todas las propiedades
        
        const aNewUser = new Professional({   
            username: username,
            lastName: lastName,
            email: email,
            password: hashPass,
            role: role,
            job: job, 
            speciality: speciality, 
            numberCollegiate: numberCollegiate, 
            examinationRooms: examinationRooms,
            imageUrl: imageUrl
        });
        
  
        aNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }

           
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({ message: 'Login after signup went bad.' });
                    return;
                }

                // Send the user's information to the frontend
                // We can use also: res.status(200).json(req.user);
                res.status(200).json(aNewUser);
            });
        });
    });
});



authRoutes.post('/login', (req, res, next) => {

    if(req.body.role){
        passport.use(new LocalStrategy((username, password, next) => {
            Professional.findOne({ username }, (err, foundUser) => {
                if (err) {
                    next(err);
                    return;
                }
    
                if (!foundUser) {
                    next(null, false, { message: 'Usuario no registrado.' });
                    return;
                }
    
                if (!bcrypt.compareSync(password, foundUser.password)) {
                    next(null, false, { message: 'Contraseña incorrecta.' });
                    return;
                }
    
                next(null, foundUser);
            })
    }));
    
    
        passport.authenticate('local', (err, theUser, failureDetails) => {
            if (err) {
                res.status(500).json({ message: 'Something went wrong authenticating profe' });
                return;
            }
            console.log(theUser)
            if (!theUser) {
                // "failureDetails" contains the error messages
                // from our logic in "LocalStrategy" { message: '...' }.
                res.status(401).json(failureDetails);
                return;
            }
    
            // save user in session
            req.login(theUser, (err) => {
                if (err) {
                    res.status(500).json({ message: 'Session save went bad.' });
                    return;
                }
    
                // We are now logged in (that's why we can also send req.user)
                res.status(200).json(theUser);
            });
        })(req, res, next);
    } else {
        const patient = new LocalStrategy((username, password, next) => {

            Patient.findOne({ username }, (err, foundUser) => {
                if (err) {
                    next(err);
                    return;
                }
        
                if (!foundUser) {
                    next(null, false, { message: 'Usuario no registrado.' });
                    return;
                }
        
                if (!bcrypt.compareSync(password, foundUser.password)) {
                    next(null, false, { message: 'Contraseña incorrecta.' });
                    return;
                }
        
                next(null, foundUser);
            })
        })
        passport.use(patient);
        
    

        passport.authenticate('local', (err, theUser, failureDetails) => {
            console.log(theUser)
            
            if (err) {
                console.log(err)
                res.status(500).json({ message: 'Something went wrong authenticating user' });
                return;
            }
    
            if (!theUser) {
                // "failureDetails" contains the error messages
                // from our logic in "LocalStrategy" { message: '...' }.
                res.status(401).json(failureDetails);
                return;
            }
    
            // save user in session
            req.login(theUser, (err) => {
                if (err) {
                    res.status(500).json({ message: 'Session save went bad.' });
                    return;
                }
                // We are now logged in (that's why we can also send req.user)
                res.status(200).json(theUser);
            });
        })(req, res, next);
    }
});

authRoutes.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});


authRoutes.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({ message: 'Unauthorized' });
});

module.exports = authRoutes;