const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const User = require("./models/user")



const PORT = process.env.PORT || 3001;


mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URI).then(result => {
    console.log('connected to MongoDB')
})
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

app.use(express.static('dist'))
app.use(express.json())

app.get('/api/users', (request, response) => {
    User.find({}).then(users => {
        response.json(users)
    })
})

app.post('/api/users', (request, response) => {
    const user = request.body

    if (!user) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const newUser = new User(user)
    newUser.save().then(savedUser => response.json(savedUser))

})

app.delete('/api/users/:id', (request, response) => {
    const id = request.params.id
    User.findByIdAndDelete(id).then(result => response.status(204).end())

})

app.put('/api/users/:id', (request, response) => {
    const userToEdit = request.body
    if (!userToEdit) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    const id = request.params.id

    User.findById(id).then((user) => {
        user.name = userToEdit.name
        user.github = userToEdit.github
        user.email = userToEdit.email
        return user.save().then((updatedUser) => {
            response.json(updatedUser)
        })
    })
})



const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})