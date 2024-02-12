const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Main route')
})

//Enviar archivos (ya sea audios, pdf y demas)
app.get('/plantilla', (req, res) => {
    res.sendFile('./static/index.html', { root: __dirname })
})

//Enviar en formato JSON
app.get('/json', (req, res) => {
    res.json({ "nombre": 'Nahuel' })
})

//SOLO enviar un estado 
app.get('/isLive', (req, res) => {
    res.sendStatus(204)
})

app.use((req, res) => {
    res.status(404).send('Route not found')
})

app.listen(3000, () => [
    console.log('SERVER ON PORT 3000')
])