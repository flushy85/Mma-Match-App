const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')
const fightersRouter = require('./controllers/fighters')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

//  const ufc = require('../ufc-api/lib/ufc/index')
//  const url = "http://www.ufc.com/fighter/Max-Holloway"

console.log('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message)
  })

app.use(cors())
app.use(bodyParser.json())
app.use(middleware.requestLogger)
app.use(express.static('build'))
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/fighters', fightersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
