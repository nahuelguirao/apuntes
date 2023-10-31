let nombre = 'Nahusel'

// Instanciando una promesa
const promesa = new Promise((resolve,reject) => {
    if (nombre != 'Nahuel'){
        reject('Lo siento, falló');
    } else {
        resolve('Exito! El nombre es Nahuel')
    }
})

console.log(promesa)

// Como acceder a los datos encapsulados de la promesa (exito), utiliza un Callback
promesa.then(resultado => {
    console.log(resultado);
}).catch(e => {
    console.log(e);
})

// el .then solo te utiliza para manejar el resolve
// el .catch es para manejar el reject


