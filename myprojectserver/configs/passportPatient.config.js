const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const Patient = require('../models/Patients')


passport.serializeUser((loggedInUser, cb) => cb(null, loggedInUser._id))

passport.deserializeUser((userIdFromSession, cb) => {
        Patient.findById(userIdFromSession, (err, userDocument) => {
            if (err) {
                cb(err);
                return;
            }
            cb(null, userDocument);
        });
    
});



