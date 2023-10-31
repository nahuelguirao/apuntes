let array = [1,1,1,1,3,4,5,6,6,7]


// Quita los duplicadosp pero devuelve un set 
let unico = new Set(array)
// Convierte el set en un array nuevo 
let nuevoArray = [...unico]

console.log(nuevoArray)