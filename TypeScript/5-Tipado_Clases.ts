class Pelicula {
  //Hay que inicializarlo (igualarlo a alguna variable o ponerle ? ya que sino tira error)
  nombre: string = "Nombre default";
  protagonistas?: string[];
  actores?: string[];

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
