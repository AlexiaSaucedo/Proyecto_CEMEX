//usar express
import express from 'express'
import path from 'path'
const app = express()
const port = 3000;

app.set('view engine', 'ejs')
app.use('/front', express.static(path.join(__dirname, '/homepage.html')))

app.get('/homepage', function(req, res) {
  res.render('front/homepage')
  // res.sendFile(path.join(__dirname, '/homepage.html'));
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