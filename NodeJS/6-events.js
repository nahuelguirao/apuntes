const EventEmiter = require('events')

//Objeto que gestiona los eventos en Node
const customEmitter = new EventEmiter()

//Escucha (similar a un add event listener en el front)
customEmitter.on('response', (data) => {
    console.log(data)
})

//Emite un eevento customizado 
customEmitter.emit('response', { 'nombre': 'nahuel' })