const array = [1,2,3,4,5];
const otroArray = [6,7,8,8,10];
//Tambien se puede concatenar con array.concat(otroArray)
const nuevoArray = [...array, ...otroArray];

//Con objetos es igual
const objeto1 = {
    a : 'a',
    b : 'b',
    c : 'c',
};

const objeto2 = {
    d : 'd',
    e : 'e',
};

const nuevoObjeto = {...objeto1, ...objeto2};
