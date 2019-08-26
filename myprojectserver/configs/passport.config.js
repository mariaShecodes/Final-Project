const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const Professional = require('../models/Professional');
const Patient = require('../models/Patients')

passport.serializeUser((loggedInUser, cb) => {
    
    cb(null, loggedInUser._id)})

passport.deserializeUser((userIdFromSession, cb) => {
        console.log(userIdFromSession)
        Professional.findById(userIdFromSession, (err, userDocument) => {

            console.log(userDocument)

            if (err) {
                cb(err);
                return;
            } else if(!userDocument){
                Patient.findById(userIdFromSession, (err, userDocument) => {
                    if (err) {
                        cb(err);
                        return;
                    } else if(!userDocument){
                        console.log("No es nadie")
                    } else {

                        cb(null, userDocument);
                    }
                });
            } else {
                cb(null, userDocument);

            }
        });
    
});

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




