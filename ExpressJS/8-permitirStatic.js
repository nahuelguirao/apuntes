const express = require('express')
const path = require('path')

const app = express()

//Configuración que me permite setear una carpeta de estaticos para poder acceder a ellos desde la url
app.use(express.static(path.join(__dirname, 'static')))

app.use((req, res) => {
    res.status(404).send('Route not found')
})

app.listen(3000, () => [
    console.log('SERVER ON PORT 3000')
])