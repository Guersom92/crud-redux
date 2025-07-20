const usersRouter = require('express').Router()
const User = require('../models/user')


usersRouter.get("/", (request, response) => {
    User.find({}).then(users => {
        response.json(users)
    })
})

usersRouter.post("/", (request, response) => {
    const user = request.body

    if (!user) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const newUser = new User(user)
    newUser.save().then(savedUser => response.status(201).json(savedUser))

})

usersRouter.delete("/:id", (request, response) => {
    const id = request.params.id
    User.findByIdAndDelete(id).then(result => response.status(204).end())

})

usersRouter.put("/:id", (request, response) => {
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

module.exports = usersRouter