const { createReadStream } = require('fs')

//Sirve para ir emitiendo un archivo pesado por partes
const stream = createReadStream('./data/bigFile.txt', 'utf-8')

//Siempre que quede data por recorrer la escucha y la muestra
stream.on('data', (chunk) => {
    console.log(chunk)
})

stream.on('end', () => {
    console.log('Terminó.')
})

stream.on('error', (err) => {
    console.error(err)
})



//STREAMS CON HTTP
const http = require('http')
const { createReadStream } = require('fs')

const server = http.createServer((req, res) => {
    const fileString = createReadStream('./data/bigFile.txt', 'utf-8')

    fileString.on('data', (chunk) => {
        fileString.pipe(res) //Le pasa al response la porción del dato que tiene en el momento
    })

    fileString.on('error', (err) => {
        console.error(err)
    })
})

server.listen(3000, () => console.log('LISTENING PORT 3000'))
