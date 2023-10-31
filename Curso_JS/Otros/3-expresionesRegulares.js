let texto = "Hola mi nombre es nahuel"
// Si se agrega una 'i' se ignora el case sensitive 
let busqueda = texto.search(/Nahuel/i)

// MODIFICADORES 
// i : Case sensitive off
// g : Buscar en todo el texto 
// m : Busqueda multilinea


// Defino el patron y luego verifico si existe (respuesta boleana)
let pattern = /Nahuel/i 
let resultado = pattern.test(texto)

// EXEC trae varios atributos (si no encuentra devuelve null)
let resultado2 = pattern.exec(texto)

// Buscar un rango entre dos numeros (tambien puede ser una '\d' como digito general)
let pattern2 = /[0-9]/
let resultado3 = pattern2.test(texto)
