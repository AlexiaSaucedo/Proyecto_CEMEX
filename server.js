//Express server
const express = require('express');
const path = require('path');
const {check, validationResult} = require('express-validator');
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Modelos de la base de datos 
const db = require("./models")

//Controllers
const empleadoController = require('./controller/empleadoController');

//Server Porte
const PORT = process.env.PORT || 5000;


// set the rendering motor view templating
app.set('view engine', 'ejs')


app.set('front', path.resolve('./front'))
//Set static folder 
app.use(express.static(path.join(__dirname, 'front')));

app.get('/homepage', function(req, res) {
  res.render('front/homepage')
  // res.sendFile(path.join(__dirname, '/homepage.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/register.html'));
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
