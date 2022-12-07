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

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note)
        response.json(note)
    else
        response.send("Valor no encontrado wey")
})

const PORT = 7777
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})