const express = require('express')
const app = express()
const cors = require("cors")

let users = [
    { id: "4545", name: "guersom", email: "guersom80@gmail.com", github: "guersom92" }
]

const PORT = process.env.PORT || 3001;
app.use(cors());

app.get('/api/users', (request, response) => {
    response.json(users)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})