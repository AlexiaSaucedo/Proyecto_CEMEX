//Express server
const express = require('express');
const passport = require('passport'); 
const session = require('express-session');
const path = require('path');
var cors = require('cors');
const {check, validationResult} = require('express-validator');
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

//Middleware
const auth = require('./middleware/jwt');


//Modelos de la base de datos 
const {Empleado} = require('./models/index')
const {Tarea} = require('./models/index')

//Controllers
const empleadoController = require('./controller/empleadoController');
//const Tarea = require('./models/Tarea');

//Server Port
const PORT = process.env.PORT || 5000;


// set the rendering motor view templating
app.set('view-engine', 'ejs')

app.set('front', path.resolve('./front'))
app.use(express.static(path.join(__dirname, 'views')));


//Iniciar Endpoints
app.get('/', auth, (req, res) => {
  res.render('front/homepage', {user: "Esta registrado"});
});

app.get('/auth', auth, (req, res) => {
  console.log({success: true})
});

app.get('/homepage', (req, res) => {
  res.render('homepage.ejs')
});

app.get('/videogame', (req, res) => {
  res.render('Videogame.ejs')
});

app.get('/videogame/profile/:id', (req, res) => {
  const id = req.params.id 
  Empleado.findAll({
    where: {
      id: id
    }
  }).then(tarea => res.json(tarea)
  ).catch(err => {
    res.status(500).json(err)
  }) 
});

// Poner la variable 'auth'
app.get('/profile', (req, res) => {
  const id = req.query.id
  //const token = req.params.token
  Empleado.findByPk(id)
  .then(user => {
    console.log(user)
    res.render('profile.ejs', {token: null, id: user.id ,nombre: user.nombre, apellido: user.apellido, puesto: user.puesto, email: user.email})  
  }).catch(err => {
    res.status(500).json(err);
  })
});

app.get('/profile/:id/:token', (req, res) => {
  const id = req.params.id
  const token = req.params.token
  Empleado.findByPk(id)
  .then(user => {
    console.log(user)
    res.render('profile.ejs', {kpi: user.kpi ,token: token, id: user.id ,nombre: user.nombre, apellido: user.apellido, puesto: user.puesto, email: user.email})  
  }).catch(err => {
    res.status(500).json(err);
  })

});

app.get('/tareas/:id', (req, res) => {
  const id = req.params.id 
  Tarea.findAll({
    where: {
      Id_Empleado: id
    }
  }).then(tarea => res.json(tarea)
  ).catch(err => {
    res.status(500).json(err)
  }) 

}); 


app.get('/login', (req, res) => {
  res.render('login.ejs', {error: "NO"})
});

app.get('/register', (req, res) => {
  res.render('register.ejs', {error: "NO"} )
});

//empleadoController.login
app.post('/login', empleadoController.login);
app.post('/register', empleadoController.signUp);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
