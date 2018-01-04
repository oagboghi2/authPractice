const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
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

module.exports = app;