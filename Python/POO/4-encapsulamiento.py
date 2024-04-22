class Persona():
    #Tipos de acceso a miembros
    #Público
    #Protegido ( _ )
    #Privado ( __ )

    def __init__(self, id, nombre, apellidos):
        self.id = id #Público
        self._nombre = nombre #Protegido
        self.__apellidos = apellidos #Privado


persona = Persona(1, "Nahuel", "Guirao")



class Animal():
    def __init__(self, nombre, edad):
        self.nombre = nombre,
        self._edad = edad #Para acceder desde una herencia tiene que ser PROTEGIDO y no PRIVADO

class Perro(Animal):
    def __init__(self, nombre, edad, raza):
        super().__init__(nombre,edad)
        self.raza = raza
    
    def mostrar_edad(self):
        print(f"Raza {self._edad}")

perro = Perro("Carlos",3,"Caniche")

perro.mostrar_edad()


#Getters y setters (para atributos privados)
class Usuario:
    def __init__(self, id, nombre, edad):
        self.id = id
        self.nombre = nombre
        self.__edad = edad

    #Getter
    def obtener_edad(self):
        return self.__edad
    
    #Setter 
    def establecer_edad(self, edad):
        self.__edad = edad