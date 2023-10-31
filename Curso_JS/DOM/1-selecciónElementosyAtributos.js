// Obtener elementos HTML

let prueba1 = document.getElementById() // Selecciona por ID

let prueba2 = document.getElementByTagName('p') // Selecciona por etiqueta HTML

let prueba3 = document.querySelector() // Selecciona el primer elemento que coincida con el grupo especificado de selectores

let prueba4 = document.querySelectorAll() // Todos los elementos que coincidan con el grupo de selectores especificados



// Obtener, modificar y eliminar atributos de un elmento 

// Como modificar o establecer un atributo (a un input tipo email x ejemplo)
prueba1.setAttribute('type', 'email')  // prueba1 seria un input 

// Como obtener un atributo (se pone como parametro el atributo que queres obtener) 
prueba1.getAttribute('type') // Devolvería 'email'

// Como eliminar un atributo
prueba1.removeAttribute('type')




// Cambiar estilos de un elemento/s
let titulo = document.getElementById('titulo')

titulo.style.color = 'red'
titulo.style.backgroundColor = '#32b'



