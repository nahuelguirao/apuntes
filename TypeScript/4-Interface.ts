//Tipado personalizado se definen los tipos primero y luego se lo iguala al crear el objeto
interface Programador {
  nombre: string;
  tecnologias: string[];
  junior: boolean | null;
}

let programador: Programador = {
  nombre: "Nahuel",
  tecnologias: ["React", "Django", "Python"],
  junior: true,
};

let programador2: Programador = {
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
enviarCv(programador3);
