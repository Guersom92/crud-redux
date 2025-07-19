const express = require('express')
const app = express()


let users = [
    { id: "4545", name: "guersom", email: "guersom80@gmail.com", github: "guersom92" }
]

const PORT = process.env.PORT || 3001;

app.use(express.json())

app.get('/api/users', (request, response) => {
    response.json(users)
})
app.post('/api/users', (request, response) => {
    const user = request.body

    if (!user) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    user.id = crypto.randomUUID()
    users.push(user)
    response.json(user)

})

app.delete('/api/users/:id', (request, response) => {
    const id = request.params.id
    users = users.filter(user => user.id !== id)
    response.status(204).end()
})

app.put('/api/users/:id', (request, response) => {
    const userToEdit = request.body
    if (!userToEdit) {
        return response.status(400).json({
            error: 'content missing'
        })
    }
    const id = request.params.id
    users = users.map(user => user.id === id ? userToEdit : user)

    response.json(users)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})