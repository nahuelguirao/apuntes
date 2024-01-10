type FichaTecnica = {
  nombre: string;
  edad: number;
  email: string;
};

type Trabajador = {
  profesion: string;
  jubilado: boolean;
};

//El tipo 'persona' unifica los dos anteriores
type Persona = FichaTecnica & Trabajador;

//Utilización
let nahuel: Persona = {
  nombre: "Nahuel",
  edad: 19,
  email: "na@gmail.com",
  profesion: "programador",
  jubilado: false,
};
