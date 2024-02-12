const express = require('express')
const morgan = require('morgan')

const app = express()

//Los middlewares son funciones que utilizamos antes de acceder a una URL, se usan con .use()
app.use((req, res, next) => {
    console.log('Approved.')
    next() //Next es para salir del middleware
})

app.use(morgan('tiny')) //Morgan sirve para mostrar en consola info de las rutas visitadas

app.get('/profile', (req, res) => {
    res.send('Profile')
})

app.listen(3000, () => {
    console.log('SERVER ON PORT 3000')
})