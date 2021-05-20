//usar express
const express = require('express');
const path = require('path');
//import { fileURLToPath } from 'url';
const app = express();
//const __dirname = path.dirname(fileURLToPath(import.meta.url));

//Set static folder
//app.use(express.static(path.join(__dirname, 'front')));

// set the rendering motor view templating
app.set('view engine', 'ejs')
app.set('front', path.resolve('./front'))
// set as static pages the exported demo game
app.use('/Juego', express.static(path.resolve('./front/Juego')))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



/*

app.set('view engine', 'ejs')
app.use('/front', express.static(path.join(__dirname, '/homepage.html')))

app.get('/homepage', function(req, res) {
  res.render('front/homepage')
  // res.sendFile(path.join(__dirname, '/homepage.html'));
});
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

app.listen(port, () => console.log("listening on port" + port))
*/