//nombre variable: tipo de dato = declaración
let aprobado: boolean = true;

let numero: number = 19;

let nombre: string = "Nahuel";

// Al usar | quiere decir que puede ser un string O number
let puntaje: string | number = "";

//Al poner edad? quiere decir que es un parametro opcional
function presentacion(nombre: string, edad?: number) {
  console.log(`Hola soy ${nombre} ${edad && `y tengo ${edad} años`}`);
}

presentacion(nombre, numero);

//Any (hay que tratar de evitarlo) quiere decir que puede ser cualquier dato (Le dice a typescript que IGNORE todo el tipado que este ofrece)
let disney: any;

disney = "Micky mouse";
console.log(disney);

disney = 15;
console.log(disney);

disney = false;
console.log(disney);
