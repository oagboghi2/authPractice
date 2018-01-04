const express = require('express');
const app = express();
const router = express.Router()
const routes = require('./routes/authentication')
require('ejs')

app.use('/', routes)

app.listen(3000, () => {
  console.log('LISTENING ON 3000')
})

module.exports = app;