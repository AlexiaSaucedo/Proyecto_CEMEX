const auth = require('./middleware/auth');

function initialize(passport){


    passport.serializeUser((user, done) => {})
    passport.deserializeUser((id, done) => {})
}