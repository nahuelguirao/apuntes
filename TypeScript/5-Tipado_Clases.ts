class Pelicula {
  //Determinar si las props son public/private y definir su tipado
  public nombre: string;
  public protagonistas?: string[];
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
