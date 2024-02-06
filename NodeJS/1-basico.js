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