//Para tipay arrays recordar los []
let numeros: number[] = [1, 2, 3, 4, 5];

let nombres: string[] = ["Nahuel", "Carlos", "Sergio"];

//Tambien puede ser asi:
let equipos: Array<string> = ["Boca JRS", "River Plate"];

//Arrays de varios tipos
let random: (string | number)[] = ["Nahuel", 1, "Hola", 422];

let random2: Array<string | number> = ["carlos", 23, "chau"];

//Lista de listas
let board: string[][] = [["Hola", "Como"], ["Estas"]];

// ------------------------------

//Ejemplo de tipado de un tablero de TA-TE-TI

type valoresCelda = "X" | "O" | "";
type tableroCompleto = [
  [valoresCelda, valoresCelda, valoresCelda],
  [valoresCelda, valoresCelda, valoresCelda],
  [valoresCelda, valoresCelda, valoresCelda]
];

let tableroTateti: tableroCompleto = [
  ["X", "", "O"],
  ["O", "", "X"],
  ["", "", ""],
];

// -----------------------
//Ejemplo tupla

type RGB = readonly [number, number, number];

let rojo: RGB = [255, 0, 0];
