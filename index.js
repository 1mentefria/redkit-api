const express = require('express')
const app = express()

let notes = [
    {
        "id": 1,
        "content": "hola"
    },
    {
        "id": 2,
        "content": "adios"
    }
]

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

const PORT = 80
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})