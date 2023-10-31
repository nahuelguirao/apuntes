// Como agregar una clase
let titulo = document.getElementById('prueba')
titulo.classList.add('clase-nueva')

//Eliminar
titulo.classList.remove('clase-nueva')

//Si la clase existe la elimina y si no la agrega
titulo.classList.toggle('nueva-clase')

//Reemplazar la clase
titulo.classList.replace('nueva-clase','otra-clase')