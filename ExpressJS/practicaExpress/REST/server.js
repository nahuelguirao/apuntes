const express = require('express')
const morgan = require('morgan')

const app = express()

//Simula info traida de una db
let products = []

//Middlewares
app.use(morgan('dev'))
app.use(express.json())

//Get all products
app.get('/products', (req, res) => {
    res.json(products)
})

//Get specific product
app.get('/products/:id', (req, res) => {
    const paramId = req.params.id
    const filteredProduct = products.find(product => product.id == paramId)

    filteredProduct ?
        res.json(filteredProduct)
        :
        res.send('Product not found.')
})

//Add a new product
app.post('/products', (req, res) => {
    const newProduct = req.body
    products = [...products, newProduct]
    res.json(newProduct)
})

//Update product
app.put('/products/:id', (req, res) => {
    const paramsId = req.params.id
    const productIndex = products.findIndex(product => product.id == paramsId)

    if (productIndex === -1) {
        return res.status(404).send('Product not found')
    }

    products[productIndex] = { ...products[productIndex], ...req.body }

    res.json(products[productIndex])
})

//Delete product 
app.delete('/products/:id', (req, res) => {
    const paramsId = req.params.id
    products = products.filter(product => product.id != paramsId)
    res.json(products)
})

//If route doesn't exist
app.use((req, res) => {
    res.status(404).send('Route not found.')
})

//PORT
app.listen(3000, () => console.log('SERVER ON PORT 3000'))