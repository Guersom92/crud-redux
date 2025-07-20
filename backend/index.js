const express = require('express')
const app = express()
const mongoose = require('mongoose')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware')
const config = require('./utils/config')



mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI).then(result => {
    console.log('connected to MongoDB')
})
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

app.use(express.static('dist'))
app.use(express.json())

app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})