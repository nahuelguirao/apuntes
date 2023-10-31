//Timeout

setTimeout( () => {
    document.write('Hola');
}, 2000) //Cantidad en milisegundos


//Intervalo

const intervalo = setInterval( () => {
    document.write('Hola')
}, 2000) //Ejecuta cada 2 segundos la función

//Para terminarlo
setTimeout ( () => {
    clearInterval(intervalo);
}, 10000) //Se termina el intervalo despues de 10 segundos