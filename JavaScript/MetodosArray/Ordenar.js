const numbers = [10, 35, 55, 70, 100, 4, 50, 42]

//Ordena de menor a mayor (modificando el array original)
const result = numbers.sort((a, b) => a - b)

//Lo mismo pero sin modificar el array original
const result_2 = numbers.toSorted((a, b) => a - b)
