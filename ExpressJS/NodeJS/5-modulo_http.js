//Par poder crear nuestra app del lado del servidor
const http = require('http')

//Creando servidor base
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('Welcome!')
        return res.end()
    }

    if (req.url == '/about') {
        res.write('about')
        return res.end()
    }

    res.write('Not found')
    res.end()
})



server.listen(3000, () => {
    console.log('LISTEN ING PORT 3000')
})
