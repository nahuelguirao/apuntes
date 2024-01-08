//Una función se tipa de la siguiente forma
const sayHiCallBack = (callback: (name: string) => void) => {
  callback("Nahuel");
};
//Entonces =>  funcion: (parametro: tipadoParametro) => que retorna (si es que no retorna algo se pone VOID (en minusculas))

//Void es un tipo de dato que refiere a que 'no devuelve nada', y en caso de que lo haga no nos importaría

const sayHi = (name: string) => {
  console.log(`Hola ${name}`);
};

sayHiCallBack(sayHi);

//Arrow function
const sumar = (a: number, b: number): number => {
  return a + b;
};

//Tipado de un objeto dentro de una función

function saludar({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(`Hola ${nombre}, tienes ${edad} años.`);
}
