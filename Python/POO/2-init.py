#Automaticamente al crear un objeto se ejecuta el método init (Método constructor)

#Pero podemos definirlo manualmente
class Usuario:
    #Atributos de clase 
    hora_ultimo_inicio = None

    #Atributos de INSTANCIA (al instanciar un objeto son obligatorios)
    def __init__(self, nombre, edad, admin):
        self.nombre = nombre
        self.edad = edad
        self.admin = admin

    #Métodos....

#Instancio un objeto de la clase Usuario
usuario_1 = Usuario('Nahuel', 20, True)

print(usuario_1.nombre)