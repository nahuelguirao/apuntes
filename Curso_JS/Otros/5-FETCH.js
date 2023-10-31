// PETICIÓN FETCH EN GET (Si no ponemos el metodo es por defecto GET)
fetch('https://reqres.in/api/unknown/2')
    .then(respuesta => respuesta.json()) //Puede ser .text (stringify) en lugar de .json (parse)
    .then(respuesta => console.log(respuesta))

// POST
fetch('https://reqres.in/api/users', {
    method : 'POST',
    body : JSON.stringify({
        'nombre' : 'Nahuel',
        'apellido': 'Guirao',
    }),
    headers : {'Content-type' : 'application/JSON'}
})
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))