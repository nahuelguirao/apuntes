//Para un tipado 'genérico' se utiliza <T> (Puede ser otra letra pero por convención es la T)
function primerElemento<T>(array: T[]): T {
  return array[0];
}

//Los genericos permiten usar la misma funcionalidad con distintos tipos de elementos
const primerNombre: string = primerElemento(["Nahuel", "Carlos", "Sergio"]);
const primerNumero: number = primerElemento([1, 2, 3, 4, 5]);
const primerBoleano: boolean = primerElemento([true, false, true]);
