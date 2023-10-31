const objeto = {
    p1 : 1,
    p2 : 2,
    p3 : 3,
}


const obtenerInfo = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(objeto)
        }, 3000)
    })
}

obtenerInfo().then(resultado => console.log(resultado))


//Funcion ASINCRONA
// await hace que hasta que no tiene la información no continua (tiempo-muerto)
const mostrarResultado = async () => {
    resultado = await obtenerInfo()
    console.log(resultado)
}

mostrarResultado()