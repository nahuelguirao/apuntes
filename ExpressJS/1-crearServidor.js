const express = require('express')

//Incia el servidor
const app = express()

app.get('/', (req, res) => {
    //Enviar un archivo con sendFile()
    res.sendFile('./static/index.html', {
        root: __dirname //Hay que establecer la ruta donde empieza a buscar 
    })
})

//Mantiene abierto el servidor
app.listen(3000, () => {
    console.log('server on port 3000')
})