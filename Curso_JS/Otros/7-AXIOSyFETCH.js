const getName = async () => {
    
    let peticion = await fetch('informacion.txt');
    let resultado = await peticion.json();
    console.log(resultado)

}

getName()