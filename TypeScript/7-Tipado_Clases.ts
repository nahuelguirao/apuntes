class Pelicula {
  //Determinar si las props son public/private y definir su tipado
  public nombre: string;
  public protagonistas?: string[]; //Para determinar que una prop sea privada es private o UN '#' de manera nativa en JS
  public actores?: string[];

  proyectarEnCine() {
    console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
  }

  constructor(nombre: string, protagonistas: string[], actores: string[]) {
    this.nombre = nombre;
    this.protagonistas = protagonistas;
    this.actores = actores;
  }
}

const pelicula = new Pelicula(
  "Barbie",
  ["Barbie", "Ken"],
  ["Margot Robbie", "Ryan Gosling"]
);

console.log(pelicula);

//Se pueden implementar interfaces a clases

interface AvengerInterface {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;
}

class Avenger implements AvengerInterface {
  name: string;
  powerScore: number;
  wonBattles: number;
  age: number;

  constructor(name: string, powerScore: number) {
    this.name = name;
    this.powerScore = powerScore;
    this.wonBattles = 0;
    this.age = 0;
  }
}
