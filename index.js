const express = require('express')
const app = express()

app.use(express.json()) // Esto es para poder parsear json recibidos en el body

let notes = [
    {
        "id": 1,
        "content": "hola",
        "important": true
    },
    {
        "id": 2,
        "content": "adios",
        "important": false
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

    if (!note || !note.content) {
        return response.status(400).json({
            error: 'note.content is missing'
        })
    }
    const ids = notes.map(note => note.id) // Construimos otro array solo con los ids de notes
    const maxId = Math.max(... ids) // Obtenemos el valor máximo de todos los ids
    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important != 'undefined' ? note.important : false
    }
    notes = [...notes, newNote] // Añadimos la nueva nota al array de notas
    response.json(newNote)
})


const PORT = 7777
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})