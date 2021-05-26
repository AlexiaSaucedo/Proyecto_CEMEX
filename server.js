const express = require('express');
const path = require('path');
const app = express();
const Empleado = require('./models').Empleado;

const PORT = process.env.PORT || 5000;
//console.log(Empleado.create);


//Set static folder
app.use(express.static(path.join(__dirname, 'front')));
//app.use(express.static(path.join(__dirname, 'images')));

// set the rendering motor view templating
app.set('view engine', 'ejs')
app.set('front', path.resolve('./front'))

app.set('view engine', 'ejs')
app.use('/front', express.static(path.join(__dirname, '/homepage.html')))

app.get('/homepage', function(req, res) {
  res.render('front/homepage')
  // res.sendFile(path.join(__dirname, '/homepage.html'));
});

app.get('/profile', async (req, res) => {
  let params = Object.assign({}, req.params, req.body, req.query);
  // TODO query with the params the data of the user => await Empleado.findAll({where: {id: params.id}});
  res.render('profile', {});// second params {} will be the data that will render the employee
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'homepage.html'));
});

// TODO implement login, send credentials and generate token
app.post('/login', (req, res) => {
  res.send({})
})
// TODO fetch employee data with id, get tasks from employee, calculate kpi
app.get('/employee/:id', (req, res) => {

})
// TODO implement game front
app.get('/game/:id', (req, resp) => {
  // second param it's the data send to the ejs view
  resp.render('front/Videogame', {})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
