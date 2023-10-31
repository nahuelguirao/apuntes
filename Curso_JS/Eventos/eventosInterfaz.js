const imagen = document.querySelector('.img-prueba');

// Error (ya sea carga de archivos multimedia, etc)
imagen.addEventListener('error', ()=> {
    console.log('Sucedió un error');
})

// Load (cuando se completa la carga del sitio)
addEventListener('load', ()=> {
    console.log('Ha cargado el body');
})

