// Crear un elemento (Importante las mayusculas)
let item = document.createElement('DIV')

// Crear texto
let textItem = document.createTextNode('Texto ejemplo')

// Insertar el texto al item (appendChild() )
item.appendChild(textItem)


//Crear varios elementos
let contenedor = document.querySelector('.contenedor')
let fragmento = document.createDocumentFragment()

//Crea 20 LI con sus textos y los almacena en el fragmento
for (i=0; i<20; i++){
    let item = document.createElement('LI')
    item.innerHTML = 'Texto prueba'
    fragmento.appendChild(item)
}
//Agrega los 20 LI al contenedor
contenedor.appendChild(fragmento)



// Obtener primer hijo
let primerHijo = contenedor.firstChild //o firstElementChild
// Último
let ultimoHijo = contenedor.lastChild //o lastElementChild
