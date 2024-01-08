//Tipado personalizado para objetos, se definen los tipos primero y luego se lo iguala al crear el objeto
type Programador = {
  readonly nombre: string; //Readonly hace que no se pueda mutar la variable 'solo lectura'  IMPORTANTE! simplemente sirve para antes de compilar TS, una vez se ejecuta en JS no sirve
  tecnologias: string[]; // Si quisieramos hacer que realmente el objeto sea inmutable podriamos utilizar Object.freeze (pero eso ya es JS)
  junior?: boolean | null;
};

let programador: Programador = {
  nombre: "Nahuel",
  tecnologias: ["React", "Django", "Python"],
  junior: true,
};

let programador2: Programador = {
  nombre: "Sergio",
  tecnologias: ["HTML", "Cobol"],
};
