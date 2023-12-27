const numbers = [10, 35, 55, 70, 100, 4, 50, 42]

//Find (Itera de izquierda a derecha) si encuentra el numero retorna el mismo sino undefined
const result = numbers.find(number => number === 100)

//FindLast (Itera de derecha a izquierda) si encuentra el numero retorna el mismo sino undefined
const result_2 = numbers.findLast(number => number === 100)

//FindIndex (Retorna el indice, sino lo encuentra -1) 
const result_3 = numbers.findIndex(number => number === 100)

