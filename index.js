const express = require('express')
const app = express()

app.use(express.json()) // Esto es para poder parsear json recibidos en el body

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
    const note = notes.find(note => note.id == id)
    if (note)
        response.json(note)
    else
        response.status(404).end()
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const note = request.body
    console.log(note)

    response.json(note)
})


const PORT = 7777
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})