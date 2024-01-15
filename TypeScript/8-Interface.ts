//Tipado personalizado se definen los tipos primero y luego se lo iguala al crear el objeto
interface Programador2 {
  nombre: string;
  tecnologias: string[];
  junior: boolean | null;
}

let programador1: Programador2 = {
  nombre: "Nahuel",
  tecnologias: ["React", "Django", "Python"],
  junior: true,
};

let programador4: Programador2 = {
  nombre: "Sergio",
  tecnologias: ["HTML", "Cobol"],
  junior: false,
};

let programador3 = {
  nombre: "Carlos",
};

function enviarCv(programador: Programador) {
  console.log(`CV de ${programador.nombre}`);
}

//Como no es de tipo 'Programador' no nos va a dejar
// enviarCv(programador3);

//-------------------

//Las interfaces tambien se pueden unir como los types

interface Human {
  edad: number;
  nombre: string;
}

interface Work extends Human {
  jubilado: boolean;
  trabajo?: string;
}
