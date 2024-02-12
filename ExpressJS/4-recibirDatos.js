const express = require('express')

const app = express()

//IMPORTANTE! si queremos recibir data en formato JSON del request body
app.use(express.json())
app.use(express.text()) //Tambien puede ser express.text() o el formato que necesitemos
app.use(express.urlencoded({ extended: false })) //Para datos de un form

app.post('/addProduct', (req, res) => {
    res.send(req.body)
})

app.use((req, res) => [
    res.send('Route not found')
])

app.listen(3000, () => {
    console.log('SERVER ON PORT 3000')
})