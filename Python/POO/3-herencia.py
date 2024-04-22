class Ciudadano:
    def __init__(self, nombre, profesion):
        self.nombre = nombre
        self.profesion = profesion

    def saludar(self):
        print(f"Hola, soy {self.nombre} y mi profesión es {self.profesion}")

#Para que una clase herede de otra se la pasa dentro de parentesís
class Medico(Ciudadano):
    def __init__(self, nombre, especialidad):
        super().__init__(nombre, profesion="Médico") #Utilizó el método init de la super clase
        self.especialidad = especialidad
    
    def decir_especialidad(self):
        print(f"Soy {self.nombre} y me especializo en: {self.especialidad}")

class Policia(Ciudadano):
    def __init__(self, nombre):
        super().__init__(nombre, "Policía")
    
    #Tambien podemos sobreescribir algún metodo de la superclase dentro de una subclase
    def saludar(self):
       print(f"Saludo de policia. {self.nombre}")

a = Ciudadano("Nahuel", "Programador")

b = Medico("Carlos", "Traumatología")

c = Policia("Carmen")

a.saludar()
b.saludar()
c.saludar()

#Tipos de herencia

#Herencia simple => Herencia única de una superclase a una subclase (EJEMPLO de arriba)

#Herencia multiple => Una subclase recibe herencia de multiples superclases
class A:
    pass
class B:
    pass
class C:
    pass
class D(A,B,C):
    pass

#Herencia multinivel (herencia que va heredando de otra herencia) Abuelos, padres, hijos, nietos
#Para prevenir errores podemos usar D.mro() para ver el orden de busqueda (MRO => Orden de resolución de métodos)
class A:
    pass
class B(A):
    pass
class C(B):
    pass
class D(C):
    pass


#Herencia Jerarquica (Varias subclases heredan de una superclase)
class A:
    pass
class B(A):
    pass
class C(A):
    pass
class D(A):
    pass

#Herencia mixta (Se mezclan varios tipos de herencia, es el mas complejo de todos)