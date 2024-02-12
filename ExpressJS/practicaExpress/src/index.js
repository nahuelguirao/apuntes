const express = require('express')
const allRouter = require('./routes/routes')
const path = require('path')
require('ejs')

const app = express()

app.set('view engine', 'ejs') //seteo el modelo de engine (ejs)
app.set('views', path.join(__dirname, 'views')) //views es requerido por ejs

app.use(allRouter)

app.use((req, res) => {
    res.status(404).send('Route not found')
})

app.listen(3000, () => [
    console.log('SERVER ON PORT 3000')
])