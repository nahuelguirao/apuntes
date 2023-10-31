const pruebaTry = () => {
    try {
        return 1;
    } catch (e){
        return 2;
    } finally {
        return 3;
    }
}

const lanzarError = () => {
    try {
        //Throw lanza una excepción (puede ser cualquier tipo de valor, como una lista)
        throw 'error3';
    } catch(e) {
        console.log(e)
    } finally {
        console.log('esto se ejecuta siempre')
    }
}

lanzarError()