const jwt = require('jsonwebtoken');

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Empleado = require('../models/empleado');

passport.use(
    'signup',
    new localStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const user = await Empleado.create({ email, password });
  
          return done(null, user);
        } catch (error) {
          done(error);
        }
      }
    )
  );

/* 
module.exports = (req,res,next) => {
    
    console.log(req.headers);
    //Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({msg: "Acceso no autorizado"})
    }
    else {
        //Comprobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];

        //Comprobar la validez de este token 
        jwt.verify(token, "secret", (err, decoded) => {

            if(err) {
                res.status(500).json({msg: "Ha ocurrido un problema al decodificar el token", err});
            }else {
                console.log(decoded);
                next();
            }

        })

    
    }
};
*/