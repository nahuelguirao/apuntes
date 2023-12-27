const numbers = [10, 35, 55, 70, 100, 4, 50, 42]

//Cambiar un valor mutando el array original
numbers[2] = 'Cambio el valor'

//Permite generar un array nuevo sin mutar el original
const newArray = numbers.with(2, 'Nuevo valor')
