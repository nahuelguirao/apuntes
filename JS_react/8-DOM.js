//Crea un elemento HTMl
const title = document.createElement('h1');

//Agrega texto al elemento
title.innerText = 'Hola mundo';

//Agrega el titulo
document.body.append(title);


const button = document.createElement('button');
button.innerText = 'Enviar'
//Si se hace click en el botón se cambia el color del titulo
button.addEventListener('click', function () {
    //Agrega color al titulo
    title.style.color = 'red'
})

document.body.append(button);

