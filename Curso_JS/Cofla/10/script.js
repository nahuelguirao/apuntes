const tp1 = document.getElementById('nota-1');
const tp2 = document.getElementById('nota-2');
const evaluacion = document.getElementById('nota-3');
const boton = document.getElementById('boton-enviar');
let container = document.getElementById('resultado-final');



boton.addEventListener('click', () => {
    try {
        event.preventDefault();
        let notas = [tp1.value,tp2.value,evaluacion.value]
        if (isNaN(notas[0]) || isNaN(notas[1]) || isNaN(notas[2])) {
            throw new Error('Ingrese números entre el 1 al 10');
        }
        let resultado = (parseFloat(notas[0]) + parseFloat(notas[1]) + parseFloat(notas[2])) / notas.length;
        if (resultado >= 7 && resultado <= 10) {
            container.style.color = 'green';
            container.innerHTML = `Felicitaciones! Has aprobado, tu promedio es ${resultado}`;
        } else if (resultado < 7 && resultado >= 0){
            container.style.color = 'red';
            container.innerHTML = `Que pena! No has aprobado, tu promedio es ${resultado}`;
        } else {
            throw new Error('Ingrese números entre el 1 al 10')
        }
    } catch(error){
        container.style.color = 'yellow';
        container.innerHTML = error.message;
    }
})