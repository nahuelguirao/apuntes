console.log('holamundoo')

const frutas = ['MANZANA','PERA','BANANA','NARANJA','MANZANA','NARANJA']

// FILTER 
const resultado = frutas.filter(x => x == 'MANZANA')

// MAP 
const resultado1 = frutas.map(x => {if (x=='MANZANA') return 'KIWI'; else {return x}})

// FIND  (Si no lo encuentra tira undefined)
const resultado2 = frutas.find(x => x == 'BANANA')

// FIND INDEX 
const resultado4 = frutas.findIndex(x => x == 'NARANJA')

// FILL (Llena desde ese indice)
const resultado3 = frutas.fill('FRUTILLA', 1)

// SOME (si hay...)
const resultado5 = frutas.some(x => x == 'POMELO')

// EVERY  (Si todos son...)
const resultado6 = frutas.every(x => x == 'MANZANA')

// POP (devuelve el último elemento que se elimina del array)
const resultado7 = frutas.pop()

// PUSH  (unshift lo agrega al principio, push al final)
const resultado8 = frutas.push('FRAMBUESA')

// SPLICE (Indice, cuantos quiero cortar, y que agrego)
const resultado9 = frutas.splice(1,4,'MARACUYA')

// SLICE 
const resultado10 = frutas.slice(2,4)