const fs = require('fs')

//DE MANERA SÍNCRONA

//Lee un archivo 
console.log(fs.readFileSync('./data/first.txt', 'utf-8'))
console.log(fs.readFileSync('./data/second.txt', 'utf-8'))

//Crea un archivo
fs.writeFileSync('./data/third.txt', 'Este es un tercer archivo')


//MANERA ASÍNCRONA
fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
    data ? console.log(data) : console.log(error)
})

// -----------------------------

//PROMESAS 

//Ya esta convertido a promesa
const { readFile } = require('fs/promises')

async function allFiles() {
    try {
        const data = await readFile('./data/first.txt', 'utf-8')

        const data2 = await readFile('./data/second.txt', 'utf-8')

        console.log(data)
        console.log(data2)
    } catch (error) {
        console.error(error)
    }
}

allFiles()