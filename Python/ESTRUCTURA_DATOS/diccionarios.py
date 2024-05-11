# KEY: VALUE
usuario = {
    'nombre': 'Nahuel',
    'edad': 19,
    'programador': True
}

#Modificar un key 
usuario['edad'] = 20 

#Agregar una key
usuario['lenguajes'] = ['JavaScript','Python']


direcciones = {
    'Nahuel': 'Calle 1',
    'Pedro': 'Calle 2',
    'Carmen': 'Calle 3',
}

#Para ver si existe un key y en caso de que exista obtener su value
print(direcciones.get('Nahuel','Persona no encontrada'))

