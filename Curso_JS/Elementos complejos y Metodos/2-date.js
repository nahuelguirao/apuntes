// AAAA-MM-DD 
const fecha1 = new Date('2021-05-01')


// FECHA NOW 
const fecha = new Date()

// DATO ESPECIFICO GET DATE , MONTH etc HAY QUE TRABAJARLOS CON CUIDADO

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

let resultado = `${fecha.getDate()} de ${meses[fecha.getMonth()]} ${fecha.getFullYear()}`

console.log(resultado)

// COMO PODEMOS USAR GET PODEMOS USAR SET PARA SETEAR 
fecha1.setFullYear('2044')
console.log(fecha1)