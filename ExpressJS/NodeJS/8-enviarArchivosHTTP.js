const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const file = fs.createReadStream('./static/index.html', 'utf-8')
    //.pipe() permite ir enviando un archivo a medida que se lee
    file.pipe(res)
})

server.listen(3000, () => {
    console.log('SERVER ON PORT 3000')
})