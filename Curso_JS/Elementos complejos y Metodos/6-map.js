let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets', 5],
    ['Celulares', 15],
])


// AGREGAR UN ELEMENTO 
mapa.set('Teclados', 20)

// TAMAÑO 
let size = mapa.size

// ELIMINAR UN ELEMENTO 
mapa.delete('Computadoras')

// SI TIENE UN ELEMENTO 
let pregunta = mapa.has('Tablets')

console.log(pregunta)