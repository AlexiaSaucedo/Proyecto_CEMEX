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
                res.render('login.ejs', {error: "Usuario con este correo no encontrado"})
            }else{
                if(bcrypt.compareSync(contraseña, user.contraseña)){
                    let token = jwt.sign({user: user}, "secret", {
                        expiresIn: "7d"
                    });
                    console.log(user)
                    res.render('profile.ejs', {kpi: user.kpi,token: token, id: user.id ,nombre: user.nombre, apellido: user.apellido, puesto: user.puesto, email: user.email})
                    
                }else{

                    //res.send Contraseña incorrecta 
                    res.render('login.ejs', {error: "Contraseña incorrecta"})
                }
            }

        }).catch(err => {
            res.status(500).json(err);
        })

    },
    //Registro
    signUp(req, res) {

        //Encriptar la contraseña 
        let password = bcrypt.hashSync(req.body.password, 10);

        //Crear un usuario
        Empleado.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            contraseña: password,
            puesto: req.body.puesto
        }).then(user => {
            //Creamos el token
            let token = jwt.sign({user: user}, "secret", {
                expiresIn: "7d"
            });
            /*
            res.json({
                user: user,
                token: token
            }); */
            
            res.redirect('/login')

        }).catch(err => {
            res.render('register.ejs', {error: err})
        });

    }


}


