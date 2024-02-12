const express = require('express')

const app = express()

app.post('/addProduct', (req, res) => {
    res.send(req.body)
})

//Recibir parametros de una URL => :nombreVariable (pueden ser varias)
app.get('/hello/:name/:age', (req, res) => {
    const { name, age } = req.params
    res.json({ "name": name, "age": age, })
})

//Recibir queries de una URL => en la url formato ?nombreFiltro=Parametro
app.get('/search', (req, res) => {
    res.send(req.query.filter)
})

app.use((req, res) => [
    res.send('Route not found')
])

app.listen(3000, () => {
    console.log('SERVER ON PORT 3000')
})