//Tipado personalizado para objetos, se definen los tipos primero y luego se lo iguala al crear el objeto
type Programador = {
  nombre: string;
  tecnologias: string[];
  junior: boolean | null;
};

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
