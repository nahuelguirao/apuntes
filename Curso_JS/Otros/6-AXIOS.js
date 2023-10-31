//No es necesario convertirlo a .json()
axios('informacion.txt')
    .then(respuesta => console.log(respuesta))


//Predeterminado .get
axios.post('https://reqres.in/api/users?page=2', {
    'nombre' : 'Nahuel',
    'apellido' : 'Guirao',
})
    .then(respuesta => console.log(respuesta.data))