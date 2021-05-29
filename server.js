//Express server
const express = require('express');
const passport = require('passport'); 
const session = require('express-session');
const path = require('path');
const {check, validationResult} = require('express-validator');
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Middleware
const auth = require('./middleware/auth');


//Modelos de la base de datos 
const db = require("./models")

//Controllers
const empleadoController = require('./controller/empleadoController');

//Server Port
const PORT = process.env.PORT || 5000;


// set the rendering motor view templating
app.set('view-engine', 'ejs')

app.set('front', path.resolve('./front'))
app.use(express.static(path.join(__dirname, 'views')));


//Iniciar Endpoints
app.get('/', (req, res) => {
  res.render('front/homepage2', {user: "Esta registrado"});
});

// Poner la variable 'auth'
app.get('/profile', (req, res) => {
  //res.json({login: "Esta es la pagina de login"})
  res.render('profile.ejs', {name: 'Name:'})
});

app.get('/login', (req, res) => {
  res.render('login.ejs')
});

app.get('/register', (req, res) => {
  res.render('register.ejs')
});

//empleadoController.login
app.post('/login', empleadoController.login);
app.post('/register', empleadoController.signUp);

/*

app.post('/signup', async (req, resp) => {
  let params = processParams(req)
  try {
    let tokenUser = await employeeController.signup(params)
    resp.send(tokenUser) 
  } catch (err) {
    resp.status(get_error_status(err)).send({ error: err.message })
  }
})

app.post('/login', (req, res) => {
  let params = processParams(req)
  userController.login(params)
  .then(token => {
    res.send({token})
    res.sendFile(path.join(__dirname, 'front', 'login.html'));
  })
  .catch(err => {
    response.status(get_error_status(err)).send({ error: err.message })
  })
});

*/

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
