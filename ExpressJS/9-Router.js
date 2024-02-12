// 1° En un archivo creo el router
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Main route')
})

router.get('/json', (req, res) => {
    res.json({ "nombre": 'Nahuel' })
})


module.exports = router


//2° Los importo en el main
const express = require('express')
const allRouter = require('./routes/routes')

const app = express()

app.use(allRouter) //Utiliza las rutas que estoy importando

app.use((req, res) => {
    res.status(404).send('Route not found')
})

app.listen(3000, () => [
    console.log('SERVER ON PORT 3000')
])