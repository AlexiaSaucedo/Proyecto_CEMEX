const fs = require('fs');
const path = require('path');
const Empleado = require('../models/empleado'); //Modelo del Empleado

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;



const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

// TODO
const options = {};

// TODO
module.exports = (passport) => {}