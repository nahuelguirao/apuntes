//Para un tipado 'genérico' se utiliza <T> (Puede ser otra letra pero por convención es la T)
class Sorteo<T> {
  private ticket?: T;

  constructor(private nombre: string) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`;
  }
}

//Una vez que sabemos el tipo de dato lo tipamos en la instanciación
let sorteo = new Sorteo<number>("Nahuel");
sorteo.setTicket(7);

console.log(sorteo.sortear());
