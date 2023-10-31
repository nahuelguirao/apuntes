// No permiten valores repetidos (no los tiene en cuenta)

let conjunto = new Set(['Maria','Pedro','Ricardo','Pedro'])

// METODOS 

// AGREGAR 
conjunto.add('Nahuel')

// ELIMINA 
conjunto.delete('Pedro')

// SI TIENE UN VALOR 
let pregunta = conjunto.has('Nahuel')

// TAMAÑO (obviamente no tiene en cuenta los repetidos solo cuenta valores únicos)
let tamano = conjunto.size

console.log(tamano)