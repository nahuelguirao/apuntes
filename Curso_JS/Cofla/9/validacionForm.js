const nombre = document.getElementById('nombre')
const materia = document.getElementById('materia')
const mail = document.getElementById('mail')
const boton = document.getElementById('boton-enviar')
const resultado = document.querySelector('.resultado')

boton.addEventListener('click', (e) =>{
    e.preventDefault()
    let error = validarCampos()
    if (error[0]){
        resultado.innerHTML = error[1]
    } else {
        resultado.innerHTML = 'Solicitud enviada correctamente'
    }
})

const validarCampos = () => {
    let error = [];
    if (nombre.value.length < 5){
        error[0] = true
        error[1] = 'El nombre no puede tener menos de 5 Caracteres'
        return error;
    } else if (nombre.value.length > 40){
        error[0] = true
        error[1] = 'El nombre no puede tener mas de 40 caracteres'
        return error
    } else{
        error[0] = false
        return error
    }
}