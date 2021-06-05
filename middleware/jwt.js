const jwt = require('jsonwebtoken');
const createError = require("http-errors")
const {Empleado} = require('../models/index')


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
              Empleado.findByPk(decoded.user.id)
              .then(user => {
                req.user = user;
                console.log(user)
                next();
              })
                
            }

        })

    
    }
};
