const coche = {
    marca : 'Tesla',
};

//Si no esta definido el modelo le asigna esa propiedad
let modelo = coche.model ? coche.model : 'X';

//Nos ahorramos todo este código
if (coche.model) {
    modelo = coche.model;
} else {
    modelo = 'X';
};
