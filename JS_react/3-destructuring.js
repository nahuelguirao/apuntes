const cuadrado = {
    x: 10,
    y: 10,
}

//Desestructurar las propiedades de un objeto
function calcularArea(cuadrado){
    const {x, y} = cuadrado;
    return x * y
}