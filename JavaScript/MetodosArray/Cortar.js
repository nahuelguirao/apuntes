const numbers = [10, 35, 55, 70, 100, 4, 50, 42]

//Recorta los elementos por el numero de indice
const result = numbers.splice(1, 2, 'Hola') //Tambien se puede agregar valores como el 'hola' pero modifica el array original

const result2 = numbers.toSpliced(3, 4, 'Hola') //Genera un nuevo array y deja el original como esta