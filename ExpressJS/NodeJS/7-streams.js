const { createReadStream } = require('fs')

//Sirve para ir emitiendo un archivo pesado por partes a traves de un stream (Enviando buffers que contienen datos en su interior)
const readableStream = createReadStream('./data/bigFile.txt', 'utf-8')
const writableStream = fs.createWriteStream('copia.txt', 'utf-8')

//Siempre que quede data por recorrer la escucha y la muestra
readableStream.on('data', (chunk) => {
    //Cada que recibe un chunk lo escribe en el archivo
    writableStream.write(chunk)
})

readableStream.on('end', () => {
    console.log('Libro finalizado.')
    writableStream.end()
})

writableStream.on('finish', () => {
    console.log('Copia de libro finalizada.')
})

readableStream.on('error', (err) => {
    console.log('Error al leer libro: ', err)
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
