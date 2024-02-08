//Imprime la ruta base
console.log(__dirname)

//Exportar modulos
const sumar = (a, b) => a + b
const restar = (a, b) => a - b

module.exports = {
    sumar,
    restar
}

//Tambien puedo exportar de esta forma
module.exports.sumar = sumar
module.exports.restar = restar



// npm init para crear un paquete node (forma rápida npm init -y)

// npx sirve para ejecutar paquetes sin tener q instalarlo en el proyecto => npx cowsay hola mundo


//SI en el package.json agrego "type":"module" puedo utilizar import y export (con export default)