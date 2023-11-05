let numeros = [1,2,3,4,5];

let nombres = ['Nahuel','Carola','Valentino'];

//FOR EACH funciona como método de arrays
nombres.forEach((nombre) => console.log(nombre));

//FIND (Busca un valor en particular, devuelve el primero que encuentre)
const resultado = numeros.find((numero) => numero > 2);
const resultado1 = numeros.find((numero) => numero == 3); //Si lo encuentra devuelve el valor que se busca (3) sino undefined

//SOME (Busca si un elemento cumple 'x' condición)
const resultado2 = numeros.some((numero) => numero % 2 == 0); // Devuelve true / false si hay al menos 1 elemento que cumpla la condición

//EVERY (Verifica si TODOS los elementos cumplen con 'x' condición)
const resultado3 = numeros.every((numero) => typeof(numero) == 'number'); // Devuelve true / false

//INCLUDES (Verifica si existe un valor en especifico)
const reusltado4 = numeros.includes(5); // Devuelve true / false

//MAP (Devuelve un nuevo array con todos los elementos modificados por una función determinada)
const nuevosNumeros = numeros.map((numero) => numero ** 2); // Devuelve un array nuevo con todos los números elevados al cuadrado

//FILTER (Devuelve un nuevo array con todos los elementos que cumplan una condición 'x')
const numerosParesFiltrados = numeros.filter((numero) => numero % 2 == 0); // Devuelve [2,4]

//REDUCE (El método reduce aplica una función acumuladora a cada elemento de un arreglo (de izquierda a derecha) para reducirlo a un solo valor acumulado. Puede ser utilizado para sumar elementos, concatenarlos, encontrar el máximo, etc.)
const resultado5 = numeros.reduce((acumular, valorActual) => acumular + valorActual, 0)
