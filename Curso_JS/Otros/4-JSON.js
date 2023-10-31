// Objeto JS común
let objeto = {
    variable1 : 'Pedro',
    variable2 : 'Nahuel',
}

// JSON (tambien los nombres de las variables van entre comillas)
let jsonDeserializado = {
    'variable1' : 'Pedro',
    'variable2' : 'Nahuel',
}
// Serializa el JSON (lo convierte a string)
let serializado = JSON.stringify(jsonDeserializado)

// Deserializando un JSON
let deserializado = JSON.parse(jsonSerializado)