const express = require('express')

const app = express()

//Ejemplos de routing (puedo usar cualquier verbo HTTP)
app.get('/', (req, res) => {
    res.end('<h1>Hello world</h1>')
})

app.get('/about', (req, res) => {
    //Si enviamos solo texto es preferible usar res.send()
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})

app.post('/weather', (req, res) => {
    res.send('POST response')
})

//Con .all() podemos hacer una ruta que sirva para cualquier verbo HTTP
app.all('/all', (req, res) => {
    res.send('You can use all HTTP verbs')
})

//.use() sirve para manejar las rutas que no existen
app.use((req, res) => {
    res.status(404).send('Route not found.') //antes de devolver datos podemos establecer el estado de la response con .status()
})

app.listen(3000, () => {
    console.log('server on port 3000')
})