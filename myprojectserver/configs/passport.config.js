const Professional = require('../models/Professional');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passport = require('passport');




passport.serializeUser((loggedInUser, cb) => cb(null, loggedInUser._id))

passport.deserializeUser((userIdFromSession, cb) => {
    Professional.findById(userIdFromSession, (err, userDocument) => {
        if (err) {
            cb(err);
            return;
        }
        cb(null, userDocument);
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
    });
}));