//Sirve para darle una mayor verificación a las interfaces y corrobora si son del tipo de interface que necesitamos
//UTILIZARLOS solo de ultima instancia (si se puede evitar mejor)
interface Mario {
  company: "Nintendo";
  name: string;
  saltar: () => void;
}

interface Sonic {
  company: "Sega";
  name: string;
  correr: () => void;
}

type Personaje = Mario | Sonic;

//Corrobora que el personaje que se le pase sea tipo sonic (Es como 'dejame probar si este personaje que te paso es Sonic')
const checkIsSonic = (personaje: Personaje): personaje is Sonic => {
  //Si no retorna undefined quiere decir que SI es sonic
  return (personaje as Sonic).correr !== undefined;
};

function jugar(personaje: Personaje) {
  if (checkIsSonic(personaje)) {
    personaje.correr();
  }
}
