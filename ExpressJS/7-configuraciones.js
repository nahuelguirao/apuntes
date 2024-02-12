const express = require('express')

const app = express()

//Configuraciones Express (luego puedo utilizarlas)
app.set('appName', 'Express test')
app.set('port', 3000)
app.set('case sensitive routing') //Permite que las url sean case sensitive

app.get('/', (req, res) => {
    res.send('Main route')
})

app.use((req, res) => {
    res.status(404).send('Route not found')
})

app.listen(app.get('port'), () => [
    console.log(`${app.get('appName')} ON PORT ${app.get('port')}`) //Con app.get(nombreConfig) puedo obtener dicho valor
])