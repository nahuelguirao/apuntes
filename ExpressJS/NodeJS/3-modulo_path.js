//Controla las rutas de directorios independientemente del sistema operativo
const path = require('path')

//Sirve para concatenar rutas (acorde al sistema operativo)
const filePath = path.join(__dirname, 'rutaPrueba')

//Devuelve la base de la ruta que le pasemos (en este caso rutaPrueba)
console.log(path.basename(filePath))