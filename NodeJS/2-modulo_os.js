//Modulo para acceder a información del sistema operativo
const os = require('os')

//Obtiene información del usuario del sistema
console.log(os.userInfo())

//Tipo de sistema operativo
console.log(os.platform())

//Cuanta memoria tiene el equipo y queda libre
console.log(os.totalmem())
console.log(os.freemem())