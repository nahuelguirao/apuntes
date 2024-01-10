const address = {
  planet: "Mars",
  city: "Twitch",
};

//typeof sirve para 'copiar' el tipo de un objeto, array, función y demas
type Address = typeof address;

// ---------

//ReturnType sirve para recuperar un tipo que retorne una función

function createAddres() {
  return {
    planet: "Mars",
    city: "Buenos Aires",
  };
}

type ReturnAddress = ReturnType<typeof createAddres>;
