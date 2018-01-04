const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const { register, getUserByEmail } = require('../../models/db')
const app = express();
require('ejs')

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
  response.send('MADE IT HOME')
})

app.get('/signup', (request, response) => {
  response.render('../views/signup')
})

app.get('/login', (request, response) => {
  response.render('login', { message: null })
})

app.post('/login', (request, response) => {
  response.render('login', {message: null})
})

app.post('/signup', (request, response) => {
  const { name } = request.body
  const { email } = request.body
  const { password } = request.body

  getUserByEmail(email)
    .then((user) => {
      if(user) {
        response.render('login', {message: 'User already exists, please login'} )
      } else {
        register(name, email, password)
        response.send('You are signed up')
      }
    }).catch(console.error) 
})

module.exports = app;