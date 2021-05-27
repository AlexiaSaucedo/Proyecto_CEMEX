const {Empleado} = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const empleado = require('../models/empleado');

module.exports = {

    //Login
    login (req, res) {
        let {email, contraseña} = req.body;

        //Buscar usuario 
        Empleado.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if(!user){
                res.status(404).json({msg: "Usuario con este correo no encontrado "})
            }else{
                if(bcrypt.compareSync(contraseña, user.contraseña)){
                    let token = jwt.sign({user: user}, "secret", {
                        expiresIn: "7d"
                    });

                    res.json({
                        user: user,
                        token: token
                    });
                    
                }else{
                    res.status(401).json({msg: "Contraseña incorrecta"})
                }
            }

        }).catch(err => {
            res.status(500).json(err);
        })

    },
    //Registro
    signUp(req, res) {

        //Encriptar la contraseña 
        let password = bcrypt.hashSync(req.body.contraseña, 10);

        //Crear un usuario
        Empleado.create({
            id: 0,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            contraseña: password
        }).then(user => {
            //Creamos el token
            let token = jwt.sign({user: user}, "secret", {
                expiresIn: "7d"
            });

            res.json({
                user: user,
                token: token
            });

        }).catch(err => {
            res.status(500).json(err);
        });

    }


}


