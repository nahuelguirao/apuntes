const button = document.querySelector('.button');
const contenedor1 = document.querySelector('.contenedor-1');
const input = document.querySelector('.input-prueba');

// Se presiona una tecla
input.addEventListener('keydown', (e) => {
    console.log('una tecla fue presionada');
})

//Cuando se presiona una tecla y se suelta en el mismo elemento
input.addEventListener('keypress', (e) => {
    console.log('un usuario presiono una tecla');
})


//Cuando se suelta una tecla
input.addEventListener('keyup', (e) => {
    console.log('Una tecla fue soltada');
})